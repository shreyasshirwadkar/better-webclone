export default function Appbar() {
  return (
    <>
      <div className="fixed w-full   py-5 px-4 flex justify-between bg-background text-white">
        <div className="flex flex-col justify-center">
          <button className="text-2xl font-bold">Better</button>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col justify-center">C</div>
          <button className="text-lg text-black font-bold w-[120px] bg-heading py-1  rounded-full">
            Continue
          </button>
          <button>=</button>
        </div>
      </div>
    </>
  );
}
