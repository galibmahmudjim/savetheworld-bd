"use client";
import React, { useEffect, useState, PureComponent } from "react";
import Image from "next/image";
import "../main.css";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import HomeDetails from "./HomeDetails";
import Carousel from "react-material-ui-carousel";




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
                        <div id="leftFigHome" className=" w-[60%] left-[20%] absolute h-full flex top-0 flex-col justify-center items-center " >

                              <Image
                                    fill
                                    alt='Main121'
                                    src='/main121.svg'
                              />



                        </div>

                  </Carousel >
            </div >
      )
}


const Main12 = () => {

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

      const Description = <p>Recycling includes: Waste to Energy (WtE) and waste to products.</p>
      const M12Down = () =>
            < div className="rightHomeMainDown w-full mt-2" >
                  <div className=" text-justify ">
                        <ul className="w-full flex  mt-1 flex-col justify-end text-justify items-start list-disc">
                              <li> WtE: Almost 50% of total plastic waste will be curated by incineration by 2050</li>
                              <li>Bangladesh government has a National Action Plan: for Reduce, Reuse and Recycle of plastic<span onClick={() => router.push('/Home')} className="cursor-pointer">  .....</span></li>

                        </ul></div>

            </div >

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
                                    <div className="rightHomeMain">{Description} </div>
                                    <M12Down />
                              </div>
                        </div>

                  </div >
            </div >

      );
}

export default Main12;