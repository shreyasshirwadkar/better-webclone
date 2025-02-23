export default function Appbar() {
  return (
    <>
      <div className="fixed w-[100vw] z-20   py-5 px-9 flex justify-between bg-background text-white">
        <div className="flex gap-9">
          <div className="flex flex-col justify-center">
            <button className="text-2xl font-bold">Better</button>
          </div>
          <div className="gap-10 hidden lg:flex">
            <button className="bg-transparent font-semibold rounded-full px-5 py-4 hover:bg-white hover:text-black duration-200">
              Buy
            </button>
            <button className="bg-transparent font-semibold rounded-full px-5 py-4 hover:bg-white hover:text-black duration-200">
              Refinance
            </button>
            <button className="bg-transparent font-semibold rounded-full px-5 py-4 hover:bg-white hover:text-black duration-200">
              HELOC
            </button>
            <button className="bg-transparent font-semibold rounded-full px-5 py-4 hover:bg-white hover:text-black duration-200">
              Rates
            </button>
            <button className="bg-transparent  font-semibold rounded-full px-5 py-4 hover:bg-white hover:text-black duration-200">
              Better+
            </button>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col justify-center">
            <button className="border border-gray-400 px-4 py-4 rounded-full hover:bg-white duration-200 group">
              <svg
                width="19"
                height="18"
                viewBox="0 0 19 18"
                className="transition-all ease-in-out [&_path]:fill-white group-hover:[&_path]:fill-black h-3 w-3 md:h-4 md:w-4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.5 13.5V17C18.5 17.55 18.05 18 17.5 18C8.11 18 0.5 10.39 0.5 1C0.5 0.45 0.95 0 1.5 0H4.99C5.54 0 5.99 0.45 5.99 1C5.99 2.24 6.19 3.45 6.56 4.57C6.6 4.67 6.61 4.78 6.61 4.88C6.61 5.14 6.51 5.39 6.32 5.59L4.12 7.79C5.57 10.62 7.88 12.94 10.71 14.38L12.91 12.18C13.19 11.9 13.58 11.82 13.93 11.93C15.05 12.3 16.25 12.5 17.5 12.5C18.05 12.5 18.5 12.95 18.5 13.5Z"></path>
              </svg>
            </button>
          </div>
          <button className="hidden md:flex bg-transparent rounded-full px-5 py-4 hover:bg-white font-semibold hover:text-black duration-200">
            Sign in
          </button>
          <button className="text-sm md:text-lg text-black  font-semibold bg-heading px-6  rounded-full">
            Continue
          </button>
          <button className="flex flex-col justify-center md:hidden text-2xl font-bold">
            =
          </button>
        </div>
      </div>
    </>
  );
}
