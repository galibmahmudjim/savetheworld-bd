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
                                    alt='Main111'
                                    src='/main111.png'
                              />



                        </div>

                  </Carousel >
            </div >
      )
}
const Main11 = () => {

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
                              <div className='w-full h-full mb-8 mt-[3%]'>
                                    <div id="rightFigHome " className=" right w-full gap-3 flex flex-col justify-start items-start ">
                                          <div className="rightHomeMain">

                                          </div>
                                          <div className="rightHomeMainDown justify-start ">
                                                <ul className="gap-2 flex flex-col">
                                                      <li>Over 73,000 tonnes (40%) of plastic waste enter the Bay through Padma, Meghna, and Jamuna rivers.</li>
                                                      <li>60% of foreign plastic waste reaches Bangladesh from India, Thailand, Sri Lanka, and Myanmar.</li>
                                                      <li>Plastic particles have been found in fish stomachs and even in salt, posing a threat to marine life and human health.</li>
                                                </ul>
                                                <h2 className='mt-[30px] text-[700] text-[22px] cursor-pointer moreMain  ml-2 hover:underline'
                                                      onClick={() => {
                                                            router.push('/Home');
                                                      }}
                                                >   (more)...</h2>
                                          </div>

                                    </div>
                              </div>

                        </div >
                  </div >

            </>
      );
}

export default Main11;
