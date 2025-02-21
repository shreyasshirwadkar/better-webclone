import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col justify-center bg-white">
      <section className="h-[100vh] flex flex-col  justify-center items-center bg-background">
        <div className="mt-32 max-w-screen-2xl lg:mt-96 px-6 md:px-10 lg:px-14 flex flex-col items-center justify-center">
          <h1
            className="text-center text-heading leading-[60px] md:leading-[1] lg:leading-[130px] font-bold m-0 p-0 tracking-tight md:tracking-tight
            text-[50px] md:relative md:top-[72px] lg:top-32 md:text-4xl lg:text-[120px]"
          >
            Mortgages
            <br />
            made simple
          </h1>
        </div>
        <div className="flex md:mt-[30vh]">
          <div className="flex flex-col items-center">
            <button className="mt-7 bg-heading w-[330px] rounded-full font-bold text-md px-8 py-6">
              Start my approval
            </button>

            <div className="text-white text-md mt-3">
              3 min | No credit impact
            </div>
          </div>
          <div className="md:ml-20 mt-4">
            <Image
              src="https://media.better.com/better-com/homepage/hero-variant-c.webp"
              alt="phone"
              width={510}
              height={810}
            />
          </div>
          <div className="bg-green-900 text-white h-[90px] flex flex-col p-2 rounded-md mt-[-90px]">
            <div className="flex text-xl">
              <div>G</div>
              <div>* * * * *</div>
            </div>
            <div className="text-sm">4.6 Stars | 3177 Google reviews</div>
          </div>
        </div>
      </section>
    </div>
  );
}
