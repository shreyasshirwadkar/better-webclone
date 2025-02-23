import React, { useState } from "react";
interface PaymentBreakdownProps {
  monthlyPayment: number;
}

const PaymentBreakdown: React.FC<PaymentBreakdownProps> = ({
  monthlyPayment,
}) => {
  const [homePrice, setHomePrice] = useState(1596852227);
  const [propertyTaxes, setPropertyTaxes] = useState(259);
  const [insurance, setInsurance] = useState(136);
  const [hoaFees, setHoaFees] = useState(133);
  const [utilities, setUtilities] = useState(101);

  return (
    <div className="flex flex-col md:flex-row gap-16 bg-[#fdfcfb] mt-12 pt-28 p-12 rounded-lg shadow-md">
      {/* Left Section */}
      <div className="w-[50vw] ">
        <h2 className="text-xl font-bold ">Monthly payment breakdown</h2>
        <h1 className="text-6xl font-bold text-gray-900 mt-12">
          ${monthlyPayment}/mo
        </h1>

        {/* Progress Bar */}
        <div className="mt-12 h-20 w-[40vw] bg-green-700 rounded-full"></div>
      </div>

      {/* Right Section */}
      <div className=" p-12 w-[50vw] flex flex-col justify-between ">
        {/* Input Fields */}
        <div className="mt-4 flex flex-col space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {" "}
              <div className="w-1 h-5 rounded-full bg-green-700"></div>
              <span className="">Principal & interest</span>
            </div>

            <p className="text-right text-lg font-semibold">
              ${homePrice.toLocaleString()}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {" "}
              <div className="w-1 h-5 rounded-full bg-purple-600"></div>
              <span className="">Property taxes</span>
            </div>
            <input
              type="number"
              value={propertyTaxes}
              onChange={(e) => setPropertyTaxes(Number(e.target.value))}
              className="border rounded-lg px-3 py-2 text-lg w-32"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {" "}
              <div className="w-1 h-5 rounded-full bg-purple-400"></div>
              <span className="">Homeowners insurance</span>
            </div>
            <input
              type="number"
              value={insurance}
              onChange={(e) => setInsurance(Number(e.target.value))}
              className="border rounded-lg px-3 py-2 text-lg w-32"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {" "}
              <div className="w-1 h-5 rounded-full bg-yellow-500"></div>
              <span className="">HOA fees</span>
            </div>
            <input
              type="number"
              value={hoaFees}
              onChange={(e) => setHoaFees(Number(e.target.value))}
              className="border rounded-lg px-3 py-2 text-lg w-32"
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {" "}
              <div className="w-1 h-5 rounded-full bg-red-500"></div>
              <span className="">Utilities</span>
            </div>
            <span className="text-lg font-medium">${utilities}</span>
          </div>
        </div>

        {/* Copy Estimate Button */}
        <button className="mt-6 bg-gray-200 font-bold py-6  w-48 rounded-lg text-center hover:bg-gray-300">
          Copy estimate link
        </button>
      </div>
    </div>
  );
};

export default PaymentBreakdown;
