export interface Service {
  id: string;
  category: string;
  device: string;
  issue: string;
  price: number;
  turnaround: string;
  margin?: boolean; // Highlighted as high margin
}

export interface Product {
  id: string;
  name: string;
  category: 'phone' | 'laptop' | 'tablet';
  specs: {
    storage?: string;
    ram?: string;
    screen?: string;
  };
  condition: 'A' | 'B' | 'C';
  price: number;
  imageKey: string;
}

export interface RepairLog {
  device: string;
  status: 'FIXED' | 'PROCESSING';
  time: string;
}

export type Category = 'all' | 'phone' | 'laptop' | 'tablet';