/** @format */

import Image from "next/image";

const UnderCar = (transmission: any) => {
  {
    console.log(transmission);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image
        src="/steering-wheel.svg"
        width={20}
        height={20}
        alt="steering wheel"
      />
      <p className="text-[14px]">
        {transmission === "a" ? "Automatic" : "Manual"}
      </p>
    </div>
  );
};

export default UnderCar;
