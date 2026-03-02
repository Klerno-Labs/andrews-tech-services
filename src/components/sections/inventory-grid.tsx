"use client";

import React from "react";
import { inventory } from "@/lib/data";
import { Product, Category } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus } from "lucide-react";
import Image from "next/image";
import { images } from "@/config/images";

export function InventoryGrid() {
  const [filter, setFilter] = React.useState<Category>('all');
  const [cart, setCart] = React.useState<Set<string>>(new Set());

  const filteredProducts = filter === 'all' 
    ? inventory 
    : inventory.filter(p => p.category === filter);

  const toggleCart = (id: string) => {
    const newCart = new Set(cart);
    if (newCart.has(id)) {
      newCart.delete(id);
    } else {
      newCart.add(id);
    }
    setCart(newCart);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-section">
      {/* Header & Filter */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="font-sans text-4xl font-bold text-text mb-4">Available Assets</h2>
          <p className="font-mono text-text-muted">Refurbished units ready for immediate deployment.</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {(['all', 'phone', 'laptop', 'tablet'] as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-mono text-xs px-4 py-2 border rounded-full transition-all ${
                filter === cat 
                  ? 'bg-primary text-black border-primary' 
                  : 'border-[#333] text-text-muted hover:border-primary hover:text-primary'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div 
            key={product.id}
            className="bg-[#0A0A0A] border border-[#1a1a1a] hover:border-primary/50 transition-all duration-300 group flex flex-col h-full"
          >
            {/* Image Area */}
            <div className="relative h-48 bg-[#030303] overflow-hidden border-b border-[#1a1a1a]">
              <Image
                src={images[product.imageKey as keyof typeof images].src}
                alt={product.name}
                width={400}
                height={300}
                className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute top-2 left-2">
                <Badge variant="grade">GRADE {product.condition}</Badge>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-sans font-bold text-lg text-text mb-1 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              
              <ul className="space-y-1 mb-4 font-mono text-xs text-text-muted">
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key} className="flex justify-between">
                    <span className="opacity-50">{key.toUpperCase()}:</span>
                    <span>{value}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center justify-between">
                <span className="font-mono text-xl text-primary font-bold">
                  ${product.price}
                </span>
                
                <Button
                  variant={cart.has(product.id) ? "secondary" : "ghost"}
                  size="sm"
                  onClick={() => toggleCart(product.id)}
                  className={cart.has(product.id) ? "bg-primary text-black" : ""}
                >
                  {cart.has(product.id) ? (
                    <span className="flex items-center gap-1">Added</span>
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Floating Cart Indicator (Visual Only) */}
      {cart.size > 0 && (
        <div className="fixed bottom-6 right-6 bg-primary text-black font-mono text-xs font-bold px-4 py-3 rounded shadow-[0_0_20px_rgba(0,255,65,0.4)] flex items-center gap-2 z-40 animate-in slide-in-from-bottom-4">
          <ShoppingCart className="w-4 h-4" />
          {cart.size} UNITS SELECTED
        </div>
      )}
    </div>
  );
}