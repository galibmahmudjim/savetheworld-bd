"use client";
import Slider from "./(components)/slider";
import HomeFigure from "./(components)/HomeFigure";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
const Home: React.FC = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="w-full flex flex-col justify-center items-center">

      </div>
    </Suspense>
  );
};

export default Home;