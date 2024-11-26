"use client";

import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            GameStore
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#games" className="hover:text-primary">Games</Link>
            <Link href="#features" className="hover:text-primary">Features</Link>
            <Link href="#about" className="hover:text-primary">About</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-full">
              <ShoppingCart className="h-6 w-6" />
            </button>
            <button 
              className="md:hidden p-2 hover:bg-muted rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link href="#games" className="hover:text-primary">Games</Link>
            <Link href="#features" className="hover:text-primary">Features</Link>
            <Link href="#about" className="hover:text-primary">About</Link>
            <Link href="#contact" className="hover:text-primary">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}