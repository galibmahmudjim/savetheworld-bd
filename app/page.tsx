"use client";
import Slider from "./(components)/slider";
import HomeFigure from "./(components)/HomeFigure";
import Image from "next/image";
const Home: React.FC = () => {

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Image src="/plasticwaste.jpg" alt="plastic waste"
        layout="fill"
        z-index="-100"
        objectFit="cover"
        className="opacity-[0.09] fixed w-[100vw] h-[100vh] top-0 left-0 w-full h-full"
      >

      </Image>
      <HomeFigure />
    </div>
  );
};

export default Home;