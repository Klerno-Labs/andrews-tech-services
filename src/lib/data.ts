import { Service, Product } from "@/types";

export const servicesData: Service[] = [
  { id: "1", device: "iPhone Series", issue: "Logic Board Repair", price: 120, turnaround: "24h", margin: "high" },
  { id: "2", device: "Samsung Galaxy", issue: "Screen Replacement", price: 85, turnaround: "2h", margin: "standard" },
  { id: "3", device: "MacBook Pro", issue: "Battery Replacement", price: 150, turnaround: "Same Day", margin: "standard" },
  { id: "4", device: "iPad Pro", issue: "Glass/Digitizer", price: 200, turnaround: "24h", margin: "high" },
  { id: "5", device: "Windows Laptop", issue: "OS Reinstall/Repair", price: 75, turnaround: "4h", margin: "standard" },
  { id: "6", device: "Generic Android", issue: "Port Charging Repair", price: 60, turnaround: "1h", margin: "standard" },
  { id: "7", device: "All Devices", issue: "Bulk Data Erasure", price: 15, turnaround: "30m", margin: "high" },
  { id: "8", device: "All Devices", issue: "Diagnostic Report", price: 25, turnaround: "1h", margin: "standard" },
];

export const inventoryData: Product[] = [
  { id: "p1", name: "iPhone 12 Pro Max", category: "Phone", specs: ["256GB", "Pacific Blue", "Unlocked"], grade: "A", price: 650, imageSlot: "inventory-1" },
  { id: "p2", name: "MacBook Air M1", category: "Laptop", specs: ["16GB RAM", "512GB SSD", "i7"], grade: "B", price: 750, imageSlot: "inventory-2" },
  { id: "p3", name: "iPhone 11", category: "Phone", specs: ["128GB", "Black", "Cracked Screen"], grade: "C", price: 200, imageSlot: "inventory-1" },
  { id: "p4", name: "Dell XPS 15", category: "Laptop", specs: ["32GB RAM", "1TB SSD", "4K Display"], grade: "A", price: 1100, imageSlot: "inventory-2" },
  { id: "p5", name: "iPad Air 4", category: "Tablet", specs: ["64GB", "Space Grey", "WiFi"], grade: "B", price: 350, imageSlot: "inventory-1" },
  { id: "p6", name: "Samsung S21", category: "Phone", specs: ["128GB", "Phantom Grey", "Unlocked"], grade: "A", price: 400, imageSlot: "inventory-1" },
];

export const logTickerData = [
  "iPhone 11 Logic Board // FIXED // 14m",
  "MacBook Air Battery Swap // DONE // 22m",
  "Bulk Erasure Lot #404 // COMPLETE // 45m",
  "Samsung S8 Screen // REPLACED // 18m",
  "Windows 10 Recovery // SUCCESS // 1h 12m",
];