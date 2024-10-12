"use client";
import "@/view/pages/home/styles/card.css";
import React from 'react';

interface Testimonial {
  text: string;
  rating: number;
}

export default function Card() {
  // Testimoni yang berbeda-beda
  const testimonials: Testimonial[] = [
    { text: "This App is amazing", rating: 5 },
    { text: "Very helpful and easy to use", rating: 4 },
    { text: "Good, but could be better", rating: 3 },
    { text: "Excellent features!", rating: 5 },
    { text: "Needs improvement in speed", rating: 3 },
    { text: "Satisfied with the performance", rating: 4 },
    { text: "The UI is very clean", rating: 5 },
    { text: "Could use more functionality", rating: 2 },
    { text: "Highly recommend this app", rating: 5 },
    { text: "Worth every penny!", rating: 4 },
  ];

  return (
    <div className="wrapper">
      {testimonials.map((testimonial, index) => (
        <div className="card" key={index}>
          <h1>User {index + 1}</h1>
          <p>{testimonial.text}</p>
          <div className="rating">{'⭐'.repeat(testimonial.rating)}</div> {/* Menampilkan bintang berdasarkan rating */}
        </div>
      ))}
    </div>
  );
}
