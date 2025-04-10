import React from 'react'
import { createClient } from 'contentful'
import HeroBanner from '@/components/HeroBanner'
import ProductCard from '@/components/ProductCard'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

async function getHomePageData() {
  const [banner, products] = await Promise.all([
    client.getEntries({
      content_type: 'banner',
      limit: 1,
    }),
    client.getEntries({
      content_type: 'product',
      limit: 4,
    }),
  ])

  return {
    banner: banner.items[0],
    products: products.items,
  }
}

export default async function Home() {
  const { banner, products } = await getHomePageData()
  const bannerData = banner.fields

  return (
    <div>
      <HeroBanner
        title={bannerData.title}
        description={bannerData.description}
        image={bannerData.image.fields.file.url}
        ctaText={bannerData.ctaText}
        ctaLink={bannerData.ctaLink}
      />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <ProductCard
              key={product.sys.id}
              id={product.sys.id}
              title={product.fields.title}
              price={product.fields.price}
              image={product.fields.images[0].fields.file.url}
              slug={product.fields.slug}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 