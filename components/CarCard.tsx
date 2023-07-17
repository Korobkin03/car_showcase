/** @format */

"use client";

import { useState } from "react";
import Image from "next/image";

import { ICarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent } from "@/utils";
import { UnderCar } from "@/components";

interface ICardCarProps {
  car: ICarProps;
}

const CarCard = ({ car }: ICardCarProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div>
      <div className="car-card group">
        <div className="car-card__content">
          <h2 className="car-card__content-title">
            {make} {model}
          </h2>
        </div>

        <p className="flex mt-6 text-[32px] font-extrabold">
          <span className="self-start text-[14px] font-semibold">$</span>
          {carRent}
          <span className="self-end text-[14px] font-medium">/day</span>
        </p>

        <div className="relative w-full h-40 my-3 object-contain">
          <Image
            src="/hero.png"
            alt="car model"
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full justify-between text-gray">
            <UnderCar transmission={transmission} />

            <UnderCar transmission={transmission} />

            <UnderCar transmission={transmission} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
