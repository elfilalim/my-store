import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface HeroBannerProps {
  title: string
  description: string
  image: string
  ctaText: string
  ctaLink: string
}

export default function HeroBanner({
  title,
  description,
  image,
  ctaText,
  ctaLink,
}: HeroBannerProps) {
  return (
    <div className="relative h-[500px] w-full">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg mb-8">{description}</p>
            <Link
              href={ctaLink}
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 