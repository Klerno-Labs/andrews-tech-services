"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, Filter } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { images } from "@/config/images";

// Mock Data
const inventory = [
  { id: 1, model: "iPhone 12", specs: "64GB / Black / Grade A+", price: 320, grade: "A" },
  { id: 2, model: "iPhone 11", specs: "128GB / White / Grade B", price: 240, grade: "B" },
  { id: 3, model: "Galaxy S20", specs: "128GB / Gray / Grade A", price: 280, grade: "A" },
  { id: 4, model: "iPad Air 4", specs: "64GB / Space Gray / Grade B+", price: 350, grade: "B" },
  { id: 5, model: "iPhone XR", specs: "64GB / Red / Grade C", price: 150, grade: "C" },
  { id: 6, model: "iPhone 13", specs: "128GB / Blue / Grade A", price: 450, grade: "A" },
  { id: 7, model: "Pixel 6", specs: "128GB / Sorta White / Grade A", price: 250, grade: "A" },
  { id: 8, model: "iPhone X", specs: "256GB / Silver / Grade B", price: 210, grade: "B" },
];

export default function InventoryPage() {
  const [filter, setFilter] = useState<"all" | "phones" | "tablets">("all");

  const filteredItems = inventory.filter((item) => {
    if (filter === "phones") return item.model.includes("iPhone") || item.model.includes("Galaxy") || item.model.includes("Pixel");
    if (filter === "tablets") return item.model.includes("iPad");
    return true;
  });

  return (
    <div className="animate-fade-up max-w-[1440px] mx-auto px-6 py-12">
      {/* Header */}
      <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#1a1a1a] pb-8">
        <div>
          <div className="font-mono text-terminal-green text-sm mb-4">ROOT / INVENTORY</div>
          <h1 className="text-5xl font-bold mb-2">Available Assets</h1>
          <p className="font-mono text-muted">Refurbished units ready for resale.</p>
        </div>
        
        <div className="flex gap-2 font-mono text-sm">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 border ${filter === "all" ? "border-terminal-green text-terminal-green bg-terminal-green/5" : "border-[#333] text-muted hover:border-muted"}`}
          >
            ALL_UNITS
          </button>
          <button
            onClick={() => setFilter("phones")}
            className={`px-4 py-2 border ${filter === "phones" ? "border-terminal-green text-terminal-green bg-terminal-green/5" : "border-[#333] text-muted hover:border-muted"}`}
          >
            PHONES
          </button>
          <button
            onClick={() => setFilter("tablets")}
            className={`px-4 py-2 border ${filter === "tablets" ? "border-terminal-green text-terminal-green bg-terminal-green/5" : "border-[#333] text-muted hover:border-muted"}`}
          >
            TABLETS
          </button>
        </div>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-panel border border-[#1a1a1a] hover:border-terminal-green/50 transition-all duration-300 group flex flex-col h-full"
          >
            <div className="relative h-48 bg-void border-b border-[#1a1a1a] overflow-hidden">
              <div className="absolute top-2 left-2 z-10 bg-black border border-[#333] text-text-main font-mono text-xs px-2 py-0.5">
                GRADE_{item.grade}
              </div>
              <Image
                src={images.product.src}
                alt={item.model}
                width={400}
                height={400}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-sans font-bold text-lg text-text-main mb-1">{item.model}</h3>
              <p className="font-mono text-xs text-muted mb-4">{item.specs}</p>
              
              <div className="mt-auto flex items-center justify-between">
                <span className="font-mono text-2xl text-terminal-green font-bold">${item.price}</span>
                <button className="w-8 h-8 flex items-center justify-center border border-[#333] text-muted hover:text-terminal-green hover:border-terminal-green transition-colors">
                  <ShoppingCart size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-24 font-mono text-muted border border-dashed border-[#333]">
          NO_MATCHING_ASSETS_FOUND
        </div>
      )}
    </div>
  );
}
