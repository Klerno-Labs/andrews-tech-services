export interface Service {
  id: string;
  device: string;
  issue: string;
  price: number;
  turnaround: string;
  margin: "high" | "standard";
}

export interface Product {
  id: string;
  name: string;
  category: "Phone" | "Laptop" | "Tablet";
  specs: string[];
  grade: "A" | "B" | "C";
  price: number;
  imageSlot: keyof import("../config/images").images;
}

export interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  service: string;
}