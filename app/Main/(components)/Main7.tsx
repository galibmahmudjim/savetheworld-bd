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
                                    alt='Main71'
                                    src='/main71.jpeg'
                              />


                        </div>
                        <div id="leftFigHome" className=" w-full absolute h-full flex top-0 flex-col justify-center items-center " >

                              <Image
                                    fill
                                    alt='Main72'
                                    src='/main72.png'
                              />


                        </div>

                  </Carousel >
            </div >
      )
}


const Main7 = () => {

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

      const Description = <p>River Pollution Soars from Plastics</p>
      const M7Down = () => <div className="rightHomeMainDown w-full mt-2">
            <div className="text-justify">
                  <p>Rivers in Bangladesh receive 24 times more plastic waste from neighboring countries than what the country itself contributes. This influx poses a serious threat to river ecosystems, waterways, human health, and maritime biodiversity</p>
                  <span onClick={() => router.push('/Home')} className="cursor-pointer"> <IoIosArrowDroprightCircle className="inline" /></span>
            </div>
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

                                    <M7Down />
                              </div>
                        </div>

                  </div >
            </div >

      );
}

export default Main7;

