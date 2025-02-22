"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
  "https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp",
  "https://media.better.com/better-com/homepage/social-proof/still-quote-Amanda.webp",
  "https://media.better.com/better-com/homepage/social-proof/still-quote-Paul.webp",
];

export default function TestimonialImages() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col gap-10 mb-24 ">
      <div className="hidden md:flex items-center justify-center ">
        <Image
          src={images[selected]}
          alt="testimonial"
          width={350}
          height={0}
          className="rounded-md"
        />
      </div>
      <div className="flex justify-start ml-5 gap-5">
        <button
          onClick={() => {
            setSelected(0);
          }}
          className={
            selected === 0
              ? "border-4    rounded-full font-bold border-green-700 py-3 px-7"
              : "border-4   duration-200 rounded-full font-bold hover:border-green-700 py-3 px-7"
          }
        >
          Arian
        </button>
        <button
          onClick={() => {
            setSelected(1);
          }}
          className={
            selected === 1
              ? "border-4    rounded-full font-bold border-green-700 py-3 px-7"
              : "border-4   duration-200 rounded-full font-bold hover:border-green-700 py-3 px-7"
          }
        >
          Amanda
        </button>
        <button
          onClick={() => {
            setSelected(2);
          }}
          className={
            selected === 2
              ? "border-4    rounded-full font-bold border-green-700 py-3 px-7"
              : "border-4   duration-200 rounded-full font-bold hover:border-green-700 py-3 px-7"
          }
        >
          Paul
        </button>
      </div>
      <div className="flex items-center justify-center md:hidden">
        <Image
          src={images[selected]}
          alt="testimonial"
          width={350}
          height={0}
          className="rounded-md"
        />
      </div>
    </div>
  );
}
