"use client";
import "@/view/pages/home/styles/card.css";
import React from 'react';

interface ITestimonial {
  text: string;
  rating: number;
}

export default function Card() {
  const testimonials: ITestimonial[] = [
    { text: "Batako No.1 di Indonesia", rating: 5 },
    { text: "Kualitas terbaik", rating: 4 },
    { text: "Kualitas baik", rating: 3 },
    { text: "Saya akan repeat order paving block", rating: 5 },
    { text: "Bahan-bahan terbaik", rating: 4 },
    { text: "Sudah bagus, mungkin semennya harus diganti", rating: 4 },
    { text: "Bosnya adalah teman baik saya", rating: 5 },
    { text: "Tidak mudah hancur, tetapi mudah patah", rating: 2 },
    { text: "Semua rumah di Indonesia harus pakai batako ini", rating: 5 },
    { text: "Keren, bisa request", rating: 4 },
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
