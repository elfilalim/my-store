import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: string
  title: string
  price: number
  image: string
  slug: string
}

export default function ProductCard({ id, title, price, image, slug }: ProductCardProps) {
  return (
    <Link href={`/products/${slug}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          <p className="text-primary font-bold">${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  )
} 