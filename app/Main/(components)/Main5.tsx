"use client";
import React, { useEffect, useState, PureComponent } from "react";
import Image from "next/image";
import "../main.css";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import HomeDetails from "./HomeDetails";
import Carousel from "react-material-ui-carousel";
import { IoIosArrowDroprightCircle } from "react-icons/io";




const CarouselComponent = () => {
      const [index, setIndex] = useState(0);

      return (
            <div className="w-full h-full  flex flex-col justify-center items-center  ">

                  <Carousel className='w-full h-full  flex flex-col justify-start items-center'
                        swipe={false}
                        animation="fade"
                        indicators={false}
                        interval={7000}
                        index={index}
                        navButtonsAlwaysInvisible={true}


                  >
                        <div id="leftFigHome" className=" w-full absolute h-full flex top-0 flex-col justify-center items-center " >

                              <Image
                                    fill
                                    alt='Main51'
                                    src='/main51.png'
                              />



                        </div>

                  </Carousel >
            </div >
      )
}

const Main5 = () => {

      // const [isVisible, setIsVisible] = useState(false);
      const [clickedGraph, setClickedGraph] = useState(0);
      const [leftGrow, setLeftGrow] = useState(0);
      const [fact, setFact] = useState(false);

      const router = useRouter();
      const pathname = usePathname();
      const resetState = () => {
            setLeftGrow(1);
            setClickedGraph(0);
            setFact(false);
      }
      useEffect(() => {

      }
            , []);



      useEffect(() => {
            const leftelement = document.getElementById("leftFigHome")!;

            if (leftGrow === 1) {
                  if (leftelement) {
                        leftelement.classList.add("leftgrow");
                        leftelement.classList.remove("leftshrink");
                  }
            } else if (leftGrow === 2) {
                  if (leftelement) {
                        leftelement.classList.add("leftshrink");
                        leftelement.classList.remove("leftgrow");
                  }
            }
      }
            , [leftGrow]);

      const Description = <p>Global Top Plastic Producers:</p>
      const M5Down = () => <div className="rightHomeMainDown w-full mt-2">
            <ul className="w-full flex  mt-2 flex-col justify-end text-justify items-start list-disc">
                  <li>China: ~30% of the world's plastic demand</li>
                  <li>Europe: ~19% of the world's plastic demand</li>
                  <li>North America: 18% of the world's plastic demand<span onClick={() => router.push('/Home')} className="cursor-pointer">   <IoIosArrowDroprightCircle className="inline" /></span></li>
            </ul>

      </div>

      return (
            <div className="HomeFigure ">
                  <div className=" box-container  bg-[#fcfffc5f] ">
                        <div className='widthGrowHome w-full'>
                              <div className=" left " >
                                    <CarouselComponent />
                              </div>
                        </div>
                        <div className='w-full h-full flex flex-col justify-start items-start mt-[7%]'>
                              <div className=" right">
                                    <div className="rightHomeMain">{Description}</div>

                                    <M5Down />
                              </div>
                        </div>

                  </div >
            </div >

      );
}

export default Main5;




// const Description = 'Global Top Plastic Producers:'
{/* <div className="rightHomeMainDown w-full mt-2">
<ul className="w-full flex  mt-2 flex-col justify-end text-justify items-start list-disc">
      <li>China produces ~ 30.0%, of the Worlds demand</li>
      <li>Europe~19%</li>
      <li>North America 18%<span onClick={() => router.push('/Home')} className="cursor-pointer">  .....</span></li>
</ul>

</div> */}