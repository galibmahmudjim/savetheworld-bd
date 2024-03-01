"use client";
import React, { useEffect, useState, PureComponent } from "react";
import Image from "next/image";
import "../main.css";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import HomeDetails from "./HomeDetails";
import Carousel from "react-material-ui-carousel";
import { ChartControl, ChartType } from '@pnp/spfx-controls-react/lib/ChartControl';

import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle, Label, BarChart, Bar, PieChart, Pie, Cell, Text } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];


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
                        <img
                              alt='Mountains'
                              src='/main71.jpeg'

                              style={{ borderRadius: '10px' }}
                        />
                        <img
                              alt='Mountains'
                              src='/main7.2.png'

                              style={{ borderRadius: '10px' }}
                        />



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
                                                River Pollution Soars from Plastics
                                          </div>
                                          <div className="rightHomeMainDown justify-start ">
                                                <ul className="w-full text-xl flex flex-col justify-end items-start list-disc">
                                                      <li>By 2050, there will be more plastic in the ocean than
                                                            fish</li>
                                                      <li>51 trillion floating microplastics in the sea, are
                                                            consumed by marine animals and humans</li>
                                                      <li>Over 8 million tons of plastic waste annually enters
                                                            the oceans</li>
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

export default Main7;