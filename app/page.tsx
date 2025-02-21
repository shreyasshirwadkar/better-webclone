import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-[100vh] flex flex-col justify-center">
      <section className="flex flex-col justify-center items-center bg-background">
        <div className="mt-36">
          <h1 className="text-8xl font-bold text-heading z-1 mb-[-22px] text-center">
            Mortgages <br />
            made simple
          </h1>
          <Image
            src={
              "https://media.better.com/better-com/homepage/hero-variant-c.webp"
            }
            alt="phone"
            width={510}
            height={810}
          />
        </div>
      </section>
    </div>
  );
}
