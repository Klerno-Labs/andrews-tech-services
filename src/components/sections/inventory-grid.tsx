"use client";
import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { inventoryData } from "@/lib/data";
import { images } from "@/config/images";
import { formatCurrency } from "@/lib/utils";
import { ShoppingCart, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function InventoryGrid() {
  const [filter, setFilter] = useState<string>(&quot;All");

  const filteredData = filter === "All" 
    ? inventoryData 
    : inventoryData.filter(item => item.category === filter);

  const categories = ["All", "Phone", "Laptop", "Tablet"];

  return (
    <section className="py-24 bg-background-surface border-y border-gray-900">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Available Assets</h2>
            <p className="text-gray-400 font-mono">Refurbished and tested units ready for resale.</p>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-sm font-mono border transition-all whitespace-nowrap ${
                  filter === cat
                    ? &quot;border-primary text-primary bg-primary/10"
                    : "border-gray-800 text-gray-500 hover:text-gray-300 hover:border-gray-600"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredData.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-background border border-gray-800 group hover:border-primary/50 transition-all duration-300"
              >
                <div className="relative aspect-square bg-black overflow-hidden">
                  <Image
                    src={images[product.imageSlot].src}
                    alt={product.name}
                    fill
                    className="object-cover object-center opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <Badge variant={`grade${product.grade}` as any}>
                      GRADE {product.grade}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-xs font-mono text-primary mb-1">{product.category}</div>
                  <h3 className="text-lg font-bold text-gray-200 mb-4 leading-tight">{product.name}</h3>
                  
                  <ul className="space-y-2 mb-6">
                    {product.specs.map((spec) => (
                      <li key={spec} className="text-xs text-gray-500 font-mono flex items-center gap-2">
                        <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="text-xl font-mono text-primary font-bold">
                      {formatCurrency(product.price)}
                    </div>
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-primary hover:text-black transition-colors">
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredData.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 font-mono">NO ASSETS FOUND IN THIS SECTOR.</p>
          </div>
        )}
      </Container>
    </section>
  );
}