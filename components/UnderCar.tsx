/** @format */

import Image from "next/image";
import { IUnderCar } from "@/types";

const UnderCar = ({ text, src }: IUnderCar) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <Image src={src} width={20} height={20} alt="icon" />
      <p className="text-[14px]">{text}</p>
    </div>
  );
};

export default UnderCar;
