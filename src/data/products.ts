import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "High-fidelity audio with noise cancellation technology",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Minimalist Watch",
    price: 199.99,
    description: "Elegant timepiece with genuine leather strap",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    category: "Accessories"
  },
  {
    id: 3,
    name: "Smart Home Speaker",
    price: 159.99,
    description: "Voice-controlled speaker with premium sound",
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=800&q=80",
    category: "Electronics"
  }
];