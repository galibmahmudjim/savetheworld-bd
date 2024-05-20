"use client";
import React, { useEffect, useState, PureComponent } from "react";
import Image from "next/image";
import "../main.css";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import HomeDetails from "./HomeDetails";
import Carousel from "react-material-ui-carousel";
import More from "@/components/more";
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
                        <div className=" mt-[7%] w-full absolute h-full flex flex-col  justify-start items-center " >

                              <img
                                    width={"60%"}
                                    alt='Main12'
                                    src='/logofig1.png'
                                    style={{ aspectRatio: '1/1', borderRadius: '10px', boxShadow: '1px 0px 0px 0px #AA8E8E' }}
                              />



                        </div>
                        <div className=" w-full absolute h-full flex  flex-col justify-center items-center " >

                              <Image
                                    fill
                                    alt='Main12'
                                    src='/main12.jpg'
                              />

                              <a className='absolute bottom-[2%] right-[2%] p-4 text-white  normal-case normal opacity-50 no-underline text-[70%]'
                                    href="https://www.freepik.com/free-photo/climate-change-concept-collage_19332542.htm#fromView=search&page=1&position=14&uuid=7865a8ca-b1c1-449a-806f-737090b5c187">Image by freepik</a>


                        </div>
                  </Carousel >
            </div >
      )
}
const HomeMain = () => {

      const [leftGrow, setLeftGrow] = useState(0);
      const [fact, setFact] = useState(false);

      const router = useRouter();
      const pathname = usePathname();
      const resetState = () => {
            setLeftGrow(1);
            setFact(false);
      }

      const Description = "This portal is dedicated to raising awareness among people from all walks of life about the detrimental effects of plastic pollution on the environment, and it promotes sustainable solutions to reduce plastic waste"


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
                                    <div className="rightHomeMain inline">{Description} <span onClick={() => router.push('/Home')} className="cursor-pointer">
                                          <IoIosArrowDroprightCircle className="inline" /> </span></div>


                              </div>
                        </div>

                  </div >
            </div >

      );
}

export default HomeMain;
