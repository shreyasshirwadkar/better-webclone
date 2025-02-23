"use client";

import { useState, useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PaymentBreakdown from "@/components/PaymentBreakdown";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [zipCode, setZipCode] = useState("411004");
  const [downPayment, setDownPayment] = useState(60000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(2146);

  const calculateMortgage = useCallback(() => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    const principal = homePrice - downPayment;

    const monthlyPI =
      (principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(Math.round(monthlyPI));
  }, [homePrice, downPayment, interestRate, loanTerm]);

  const handleHomePriceChange = (value: number) => {
    setHomePrice(value);
    setDownPayment(Math.round(value * (downPaymentPercent / 100)));
    calculateMortgage();
  };

  const handleDownPaymentChange = (value: string) => {
    const numValue = Number.parseInt(value) || 0;
    setDownPayment(numValue);
    setDownPaymentPercent(Math.round((numValue / homePrice) * 100));
    calculateMortgage();
  };

  return (
    <div className="min-h-screen bg-[#f5f8f5]">
      <div className="ml-16 pt-40 max-w-6xl">
        <h1 className="mb-6 text-5xl font-bold text-gray-900">
          Mortgage calculator
        </h1>
        <p className="mb-8 text-lg text-gray-600 w-[60vw]">
          Our mortgage calculator includes key factors like homeowners
          association fees, property taxes, and private mortgage insurance
          (PMI). Get the whole picture and calculate your total monthly payment.
        </p>

        <div className="space-y-8">
          <div className="grid gap-4">
            <div className="flex items-center gap-44 ">
              <div>
                <label className="text-lg font-bold text-gray-700">
                  Home price
                </label>
                <Input
                  type="text"
                  value={`$${homePrice.toLocaleString()}`}
                  onChange={(e) => {
                    const value =
                      Number.parseInt(e.target.value.replace(/\D/g, "")) || 0;
                    handleHomePriceChange(value);
                  }}
                  className="mt-2 w-80  duration-200 border-4 border-gray-300 hover:border-green-700 !text-6xl py-11 bg-white font-bold"
                />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-700">
                  Monthly payment
                </div>
                <div className="mt-2 flex flex-col justify-center h-[15vh] text-6xl font-bold w-96 ">
                  ${monthlyPayment}/mo
                </div>
              </div>
              <Button className=" px-11 py-9 mr-4 flex flex-col justify-center text-lg font-bold bg-[#00804d] hover:bg-[#0e614d]">
                Get pre-approved
              </Button>
            </div>
            <Slider
              value={[homePrice]}
              onValueChange={([value]) => handleHomePriceChange(value)}
              max={1000000}
              step={1000}
              className="py-4"
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">
                ZIP code
              </label>
              <Input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="mt-2   duration-200 border-4 border-gray-200 hover:border-green-700 !text-2xl py-6  w-64  bg-white font-bold"
              />
            </div>

            <div className="grid grid-cols-5 col-span-1 gap-1">
              <div className="col-span-3">
                <label className="text-sm font-medium text-gray-700">
                  Down payment
                </label>
                <div className="relative mt-2">
                  <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
                    $
                  </span>
                  <Input
                    type="text"
                    value={downPayment.toLocaleString()}
                    onChange={(e) =>
                      handleDownPaymentChange(e.target.value.replace(/\D/g, ""))
                    }
                    className="mt-2 pl-7  duration-200 border-4 border-gray-200 hover:border-green-700 !text-2xl py-6  w-40  bg-white font-bold"
                  />
                </div>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-medium text-gray-700">
                  &nbsp;
                </label>
                <Input
                  type="text"
                  value={`${downPaymentPercent}%`}
                  className="mt-2 text-center   duration-200 border-4 border-gray-200 hover:border-green-700 !text-2xl py-6    bg-white font-bold"
                  readOnly
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Interest rate
              </label>
              <Input
                type="text"
                value={`${interestRate}%`}
                onChange={(e) => {
                  const value =
                    Number.parseFloat(e.target.value.replace(/[^\d.]/g, "")) ||
                    0;
                  setInterestRate(value);
                  calculateMortgage();
                }}
                className="mt-2   duration-200 border-4 border-gray-200 hover:border-green-700 !text-2xl py-6  w-24  bg-white font-bold"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Length of loan
              </label>
              <Select
                value={loanTerm.toString()}
                onValueChange={(value) => {
                  setLoanTerm(Number.parseInt(value));
                  calculateMortgage();
                }}
              >
                <SelectTrigger className="mt-2   duration-200 border-4 border-gray-200 hover:border-green-700 !text-2xl py-6  w-40  bg-white font-bold">
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 years</SelectItem>
                  <SelectItem value="20">20 years</SelectItem>
                  <SelectItem value="30">30 years</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
      <PaymentBreakdown monthlyPayment={monthlyPayment}></PaymentBreakdown>
      <Footer></Footer>
    </div>
  );
}
