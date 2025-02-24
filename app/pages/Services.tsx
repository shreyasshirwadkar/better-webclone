"use client";
import { useState } from "react";
import Image from "next/image";

export default function Services() {
  const [selected, setSelected] = useState(0);

  const buttons = ["Our Products", "Calculators", "Guides & FAQs"];
  const sections: Record<
    number,
    { title: string; image: string; description?: string }[]
  > = {
    0: [
      {
        title: "Buying your first home with Better",
        image:
          "https://media.better.com/better-com/homepage/learning-center/first-home.webp",
      },
      {
        title: "One Day Mortgage",
        description:
          "Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day.",
        image:
          "https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp",
      },
      {
        title: "Better HELOC",
        description:
          "Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit.",
        image:
          "https://media.better.com/better-com/homepage/learning-center/better-heloc.webp",
      },
      {
        title: "Insurance",
        image:
          "https://media.better.com/better-com/homepage/learning-center/insurance.webp",
      },
    ],
    1: [
      {
        title: "Mortgage calculator",
        image:
          "https://media.better.com/better-com/homepage/learning-center/mortgage-calculator.webp",
      },
      {
        title: "Affordability calculator",
        description:
          "Got homeownership dreams? Let's put some numbers behind them. Our affordability calculator estimates the maximum home you can afford.",
        image:
          "https://media.better.com/better-com/homepage/learning-center/affordability-calculator.webp",
      },
      {
        title: "HELOC calculator",
        description:
          "Need cash? Quickly see how much equity you can borrow from your home and what your monthly payments might be.",
        image:
          "https://media.better.com/better-com/homepage/learning-center/heloc-calculator.webp",
      },
      {
        title: "Fixed-rate loan comparison calculator",
        image:
          "https://media.better.com/better-com/homepage/learning-center/fixed-rate-calculator.webp",
      },
    ],
    2: [
      {
        title: "What is a good debt-to-income ratio for a home loan?",
        image:
          "https://media.better.com/better-com/homepage/learning-center/good-dti.webp",
      },
      {
        title: "Buying a house without realtor",
        description:
          "Thinking about buying a house without a real estate agent? Read this first.",
        image:
          "https://media.better.com/better-com/homepage/learning-center/buy-house-without-realtor.webp",
      },
      {
        title: "Timeline for homebuying process",
        description:
          "Does the process of buying a home seem daunting? Don't stress, we broke it down into 8 easy steps.",
        image:
          "https://media.better.com/better-com/homepage/learning-center/loan-timeline.webp",
      },
      {
        title: "Conventional loan requirements",
        image:
          "https://media.better.com/better-com/homepage/learning-center/conventional-loan.webp",
      },
    ],
  };

  return (
    <section className=" flex flex-col pt-24 bg-white px-6">
      <div className="flex flex-col items-center md:items-start gap-8 px-6 py-20 md:px-10 lg:gap-16 mb-20">
        <div className="flex flex-row justify-between w-full ">
          <h2 className="text-6xl font-bold tracking-tight">
            Got questions?
            <br />
            We&apos;ve got answers
          </h2>
          <div className="flex flex-row gap-6 items-end">
            {buttons.map((text, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`border-4 rounded-full font-bold py-3 px-7 duration-200 ${
                  selected === index
                    ? "border-green-700"
                    : "hover:border-green-700"
                }`}
              >
                {text}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 overflow-x-hidden">
          {/* First Row: 30/70 */}
          <div className="flex flex-row gap-7 w-full px-5">
            <div className="flex flex-col gap-6 w-2/5 bg-serviceCard p-11">
              <h1 className="text-2xl font-bold w-1/2">
                {sections[selected][0].title}
              </h1>
              <button className="rounded-full flex justify-center mt-4 w-12 border-gray-400 border-2 py-3 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
              <Image
                src={sections[selected][0].image}
                alt="faqimg"
                height={134}
                width={334}
                className="rounded-lg"
              />
            </div>
            <div className="w-3/5 flex flex-row gap-12 bg-serviceCard p-11">
              <div className="flex flex-col w-1/2">
                <h1 className="text-2xl font-bold">
                  {sections[selected][1].title}
                </h1>
                <p>{sections[selected][1].description}</p>
                <button className="rounded-full flex justify-center mt-4 w-12 border-gray-400 border-2 py-3 font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
              <Image
                src={sections[selected][1].image}
                alt="2ndimg"
                height={288}
                width={285}
              />
            </div>
          </div>
          {/* Second Row: 70/30 (Reversed) */}
          <div className="flex flex-row gap-7 w-full px-5">
            <div className="w-3/5 flex flex-row gap-12 bg-serviceCard p-11">
              <Image
                src={sections[selected][2].image}
                alt="2ndimg"
                height={288}
                width={285}
              />
              <div className="flex flex-col w-1/2 gap-6">
                <h1 className="text-2xl font-bold">
                  {sections[selected][2].title}
                </h1>
                <p>{sections[selected][2].description}</p>
                <button className="rounded-full flex justify-center mt-4 w-12 border-gray-400 border-2 py-3 font-bold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-2/5 bg-serviceCard p-11">
              <h1 className="text-2xl font-bold">
                {sections[selected][3].title}
              </h1>
              <button className="rounded-full flex justify-center mt-4 w-12 border-gray-400 border-2 py-3 font-bold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
              <Image
                src={sections[selected][3].image}
                alt="faqimg"
                height={134}
                width={334}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
