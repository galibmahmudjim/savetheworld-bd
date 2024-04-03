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
                                    alt='Main41'
                                    src='/Main41.jpeg'
                              />
                              <a className='absolute bottom-[2%] right-[2%] p-4 text-white  normal-case normal opacity-50 no-underline text-[70%]'
                                    href="https://www.freepik.com/free-photo/climate-change-concept-collage_19332542.htm#fromView=search&page=1&position=14&uuid=7865a8ca-b1c1-449a-806f-737090b5c187">Image by freepik</a>



                        </div>
                        <div id="leftFigHome" className=" w-full absolute h-full flex top-0 flex-col justify-center items-center " >

                              <Image
                                    fill
                                    alt='Main32'
                                    src='/main21.png'
                              />



                        </div>
                  </Carousel >
            </div >
      )
}
const Main4 = () => {

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

      const Description = <p>Plastic is not biodegradable</p>
      const M4Down = () => <div className="rightHomeMainDown w-full mt-2">
            <div className="">Life of plastics:</div>
            <ul className="w-full flex mt-2 flex-col justify-end text-justify items-start list-disc">
                  <li>Plastic bags last for 20 years</li>
                  <li>Plastic bottles last for 450 years</li>
                  <li>Fishing line lasts for 600 years<span onClick={() => router.push('/Home')} className="cursor-pointer">  .....</span></li>
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

                                    <M4Down />
                              </div>
                        </div>

                  </div >
            </div >

      );
}

export default Main4;





// const Description = 'Plastic is not biodegradable'
// const M4Down = () => <div className="rightHomeMainDown w-full mt-2">
//       <div className="">Life of plastics:</div>
//       <ul className="w-full flex mt-2 flex-col justify-end text-justify items-start list-disc">
//             <li>Plastic bags last for: 20 Years</li>
//             <li>Plastic bottles: 450 Years</li>
//             <li>Fishing line: 600 years<span onClick={() => router.push('/Home')} className="cursor-pointer">  .....</span></li>
//       </ul>

// </div>