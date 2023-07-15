/** @format */

"use client";


import { useState } from "react";
import Image from "next/image";

import { ICarProps } from "@/types";
import CustomButton from "./CustomButton";

interface ICardCarProps {
  car: ICarProps;
}

const CarCard = ({ car }: ICardCarProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;



  return (<div>

  </div>)
   

export default CarCard