'use client';

import React from 'react';

interface HomeClientProps {
  products: any[];
  categories: any[];
}

export default function HomeClient({ products, categories }: HomeClientProps) {
  const handleAddToCart = (dishName: string) => {
    // Easily formats a text string message for WhatsApp ordering later!
    alert(`${dishName} added to cart!`);
  };

  return null; // The main layout structure is handled by page.tsx, this simply bridges the client elements
}
