"use client";
import React, { useEffect, useState, PureComponent } from "react";
import Image from "next/image";
import "../main.css";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import Carousel from "react-material-ui-carousel";
import { IoIosArrowDroprightCircle } from "react-icons/io";




const CarouselComponent = () => {
      const [index, setIndex] = useState(0);

      return (
            <div className="w-full h-full flex flex-col  ">

                  <Carousel className='w-full h-full '
                        swipe={false}
                        animation="fade"
                        indicators={false}
                        interval={5000}
                        index={index}


                  >
                        <img
                              width={500}
                              height={500}
                              alt='Mountains'
                              src='/aboutplasticfig.jpeg'
                              style={{ borderRadius: '10px' }}
                        />



                  </Carousel >
            </div >
      )
}
const HomeDetails = () => {

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

      const Description = "Save The World, Bangladesh is a plastic pollution awareness portal is developed as part of a research collaborative initiative between the University of Dhaka and East West University, Bangladesh. This portal is dedicated to creating awareness among people from all walks of life and industries about the detrimental effects of plastic pollution on the environment and promoting sustainable solutions to reduce plastic waste. Plastic pollution poses a serious threat to the environment, wildlife, and human health, and contributes to global warming and climate change. Now, it is high time to take action to protect our mother Earth from further plastic pollution. "


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

                                    <h1 className="mainTitle">
                                          Bangladesh| Save The World
                                    </h1>
                                    <div id="rightFigHome " className=" right gap-10  ">

                                          <div className="rightHomeMainDown">

                                                <h2 className='mt-[30px] text-[700] text-[22px] cursor-pointer moreMain  ml-2 hover:underline'
                                                      onClick={() => {
                                                            router.push('/Home');
                                                      }}
                                                >    <IoIosArrowDroprightCircle className="inline" /></h2>
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

export default HomeDetails;
