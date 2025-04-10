import React from 'react'
import Image from 'next/image'
import { createClient } from 'contentful'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

async function getProduct(slug: string) {
  const response = await client.getEntries({
    content_type: 'product',
    'fields.slug': slug,
  })

  return response.items[0]
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProduct(params.slug)
  const { title, price, description, images, tags } = product.fields

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96">
          <Image
            src={images[0].fields.file.url}
            alt={title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-2xl text-primary font-bold mb-6">
            ${price.toFixed(2)}
          </p>
          
          <div className="prose max-w-none mb-8">
            {documentToReactComponents(description)}
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag: string) => (
              <span
                key={tag}
                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <button className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
} 