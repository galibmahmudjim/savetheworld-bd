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
                        <div id="leftFigHome" className=" w-full absolute h-full flex top-0 flex-col justify-center items-center " >

                              <Image
                                    fill
                                    alt='Main81'
                                    src='/main81.png'
                              />


                        </div>
                        <div id="leftFigHome" className=" w-full absolute h-full flex top-0 flex-col justify-center items-center " >

                              <Image
                                    fill
                                    alt='Main82'
                                    src='/main82.png'
                              />


                        </div>

                  </Carousel >
            </div >
      )
}
const Description = 'Microplastics Facts'

const Main8 = () => {

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



      return (
            <>


                  <div className="HomeFigure ">
                        <div className=" box-container  bg-[#fcfffc5f] ">


                              <div className='widthGrowHome w-full'>
                                    <div id="leftFigHome" className=" left " >

                                          <CarouselComponent />

                                    </div>
                              </div>
                              <div className='w-full h-full flex flex-col justify-center items-start ml-[4%] mr-[3%]'>
                                    <div id="rightFigHome " className=" right gap-10   ">
                                          <div className="rightHomeMain">{Description} </div>


                                    </div>
                                    <div className="rightHomeMainDown w-full mt-5">
                                          <div className=" text-justify ">
                                                <ul className="w-full flex gap-1  mt-2 flex-col justify-end text-justify items-start list-disc">
                                                      <li>Plastics below 5 millimetres in size are “microplastic”</li>
                                                      <li>Microplastics entering the human body via ingestion or inhalation can lead to various health problems </li>
                                                      <li>Over 8 million tons of plastic waste annually enters the oceans
                                                            <span onClick={() => router.push('/Home')} className="cursor-pointer">  .....</span></li>
                                                </ul></div>

                                    </div>
                              </div>

                        </div >
                  </div >

            </>
      );
}
export default Main8;
