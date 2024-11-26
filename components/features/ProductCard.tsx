"use client";

import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export default function ProductCard({ title, price, rating, imageUrl }: ProductCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-64">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm">{rating}/5</span>
          </div>
          <span className="text-lg font-bold">${price}</span>
        </div>
        <button className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}