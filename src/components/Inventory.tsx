import React from "react";
import { images } from "@/config/images";
import Image from "next/image";
import { Plus, Filter } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "iPhone 13 Pro Max", specs: ["256GB", "Grade A", "Unlocked"], price: "$650", image: "gallery-1" },
  { id: 2, name: "Samsung Galaxy S22", specs: ["128GB", "Grade B", "Good Battery"], price: "$380", image: "gallery-2" },
  { id: 3, name: "iPad Air 4", specs: ["64GB", "Grade A", "Space Gray"], price: "$420", image: "service-1" },
  { id: 4, name: "MacBook Pro 2019", specs: ["16GB RAM", "512GB SSD", "Grade B+"], price: "$950", image: "cta" },
];

export const Inventory = () => {
  return (
    <section id="inventory" className="py-32 bg-terminal-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-sans text-4xl font-bold text-terminal-text mb-2">Available Assets</h2>
            <p className="font-mono text-terminal-muted">Ready-to-ship inventory.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-terminal-border font-mono text-xs text-terminal-text hover:border-terminal-primary hover:text-terminal-primary transition-colors flex items-center gap-2">
              <Filter className="w-3 h-3" /> FILTER
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-terminal-surface border border-terminal-border group hover:border-terminal-primary/50 transition-all duration-300"
            >
              <div className="relative aspect-square bg-terminal-bg overflow-hidden p-6">
                <Image 
                  src={images[product.image as keyof typeof images].src} 
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <span className="absolute top-2 left-2 bg-terminal-bg border border-terminal-border text-[10px] font-mono px-2 py-0.5 text-terminal-muted group-hover:text-terminal-primary group-hover:border-terminal-primary transition-colors">
                  {product.specs[1]}
                </span>
              </div>
              
              <div className="p-4 border-t border-terminal-border">
                <h3 className="font-mono text-sm font-bold text-terminal-text mb-2 truncate">{product.name}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.specs.map((spec, i) => (
                    <span key={i} className="text-[10px] text-terminal-muted bg-terminal-bg px-1.5 py-0.5 rounded border border-terminal-border">
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-mono text-terminal-primary font-bold">{product.price}</span>
                  <button className="w-8 h-8 border border-terminal-border flex items-center justify-center text-terminal-muted hover:bg-terminal-primary hover:text-black hover:border-terminal-primary transition-colors">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};