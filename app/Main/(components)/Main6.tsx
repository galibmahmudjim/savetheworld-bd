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
            <div className="w-full h-full flex flex-col justify-center items-center  ">

                  <Carousel className='w-full h-full flex flex-col justify-start items-center'
                        swipe={false}
                        animation="fade"
                        indicators={false}
                        interval={5000}
                        index={index}
                        navButtonsAlwaysInvisible={true}


                  >

                        <div id="leftFigHome" className=" w-full h-full flex flex-col justify-center items-center " >
                              <picture className="block relative ">
                                    <img
                                          alt='main61'
                                          src='/main61.jpeg'
                                          style={{ borderRadius: '10px' }}
                                    />
                              </picture>

                              <a className='absolute bottom-[2%] right-[2%] p-4 text-white  normal-case normal opacity-50 no-underline text-[70%]'
                                    href="https://www.freepik.com/free-photo/climate-change-concept-collage_19332542.htm#fromView=search&page=1&position=14&uuid=7865a8ca-b1c1-449a-806f-737090b5c187">Image by freepik</a>


                        </div>
                  </Carousel >
            </div >
      )
}
const Main6 = () => {

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
                        <div className=" box-container mt-[5vh] bg-[#fcfffc5f] ">


                              <div className='widthGrowHome'>
                                    <div id="leftFigHome" className=" left " >

                                          <div className=" w-full h-full flex flex-col justify-center items-center">

                                                <CarouselComponent />
                                          </div>

                                    </div>
                              </div>
                              <div className='w-full h-full mb-8 mt-[3%]'>
                                    <div id="rightFigHome " className=" right gap-10  ">
                                          <div className="rightHomeMain">
                                                Around 36 tons of <p>CO<sup>2</sup></p> gas was emitted from
                                                facemask production
                                          </div>
                                          <div className="rightHomeMainDown justify-start ">
                                                <ul className="w-full flex flex-col justify-end items-start list-disc text-xl gap-2">
                                                      <li>Around 36 tons of CO 2 gas was emitted from
                                                            facemask production</li>
                                                      <li>Medical masks used by the USA was 89 million/year</li>
                                                      <li>Dhaka city alone disposed</li>
                                                      <li>3039 tons of hand gloves,<br />
                                                            1592 tons of medical masks and<br />
                                                            900 tons of hand sanitiser bottles.</li>
                                                </ul>
                                                <h2 className='mt-[30px] text-[700] text-[22px] cursor-pointer moreMain  ml-2 hover:underline'
                                                      onClick={() => {
                                                            router.push('/Home');
                                                      }}
                                                >   More</h2>
                                          </div>
                                          <div className=" flex flex-row h-full justify-end justify-items-start align-top items-start mt-[-100px">

                                          </div>
                                    </div>
                              </div>

                        </div >
                  </div >

            </>
      );
}

export default Main6;
