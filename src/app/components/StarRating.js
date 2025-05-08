import React from 'react';

export default function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <span key={i} className="text-yellow-400">★</span>
      ))}
    </div>
  );
} 