"use client";
import Slider from "./(components)/slider";
import HomeFigure from "./(components)/HomeFigure";
import Image from "next/image";
const Home: React.FC = () => {

  return (
    <div className="w-full flex flex-col justify-center items-center">
     
      <HomeFigure />
    </div>
  );
};

export default Home;