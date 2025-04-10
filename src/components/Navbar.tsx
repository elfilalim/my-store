import React from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Modern Store
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-primary">
              Products
            </Link>
            <Link href="/categories" className="text-gray-600 hover:text-primary">
              Categories
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-primary" />
              <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 