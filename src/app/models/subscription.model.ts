export interface Subscription {
  id: number;
  name: string;
  duration: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  savings?: string;
}
