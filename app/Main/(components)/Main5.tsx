"use client";
import React, { useEffect, useState, PureComponent } from "react";
import Image from "next/image";
import "../main.css";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import HomeDetails from "./HomeDetails";
import Carousel from "react-material-ui-carousel";

import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle, Label, BarChart, Bar } from 'recharts';

const data = [
      { country: "China", production: 30 },
      { country: "USA", production: 19 },
      { country: "India", production: 5 },
      { country: "Germany", production: 4 },
      { country: "Japan", production: 4 },
      { country: "Others", production: 38 }
];


const CarouselComponent = () => {
      const [index, setIndex] = useState(0);

      return (
            <div className="w-full h-full flex flex-col justify-center items-center   ">

                  <div className='w-full h-full flex flex-col justify-start items-center'
                  >
                        <div className="w-full h-full flex flex-col justify-start items-center">
                              <div className="text-[#181360]">
                                    Global Plastic Production
                              </div>
                              <ResponsiveContainer width="100%" height="80%"
                              >
                                    <BarChart
                                          data={data}
                                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                    >
                                          <XAxis dataKey="country" stroke="#181360" strokeWidth={1} />
                                          <YAxis dataKey="production" stroke="#181360"  >
                                                <Label
                                                      value="Production (%)"
                                                      angle={270}
                                                      position="insideLeft"
                                                      style={{ textAnchor: 'middle', fill: '#181360' }}
                                                />
                                          </YAxis>
                                          <Legend />
                                          <Bar dataKey="production" fill="#181360" label={false} />
                                    </BarChart>
                              </ResponsiveContainer>
                        </div>

                  </div >
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
                                                Global Top Plastic Producers:
                                          </div>
                                          <div className="rightHomeMainDown justify-start ">
                                                <ul className="w-full flex flex-col justify-end items-start list-disc">
                                                      <li>China produces ~ 30.0%, of the Worlds demand</li>
                                                      <li>Europe ~ 19%</li>
                                                      <li>North America 18%</li>
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

export default Main5;
