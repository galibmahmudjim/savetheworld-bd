"use client";
import React, { useEffect, useState, PureComponent } from "react";

import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle, Label, BarChart, Bar } from 'recharts';
import "./home.css";

const data = [
      { Year: 1950, AnnualPlasticProduction: { Value: 2, Unit: 'MT' } },
      { Year: 2015, AnnualPlasticProduction: { Value: 381, Unit: 'MT' } },
      { Year: 2018, AnnualPlasticProduction: { Value: 454, Unit: 'MT' } },
      { Year: 2025, AnnualPlasticProduction: { Value: 900, Unit: 'MT' } },
      { Year: 2050, AnnualPlasticProduction: { Value: 34000, Unit: 'MT' } },
];

const CustomizedAxisTick: React.FC<any> = (props) => {
      const { x, y, payload } = props;
      const valueInMillions = payload.value / 1000000; // Convert the value to millions

      return (
            <text x={x} y={y} dy={16} fill="#8884d8" transform="rotate(45)" fontSize={10} textAnchor="start">
                  {`${valueInMillions}M`} {/* Display the value in millions with 'M' */}
            </text>
      );
};
const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
            const valueInMillions = (payload[0].value / 1000000).toFixed(2); // Convert and round to two decimal places

            return (
                  <div style={{ border: '1px solid #ccc', padding: '10px' }} className="flex flex-col bg-purple-500 justify-start items-start">
                        <p>{`Year: ${label}`}</p>
                        <p>{`Production: ${valueInMillions}M Ton`}</p>
                  </div>
            );
      }

      return null;
};



const GlobalPlasticProduction = () => {

      const [isVisible, setIsVisible] = useState(false);
      const [clickedGraph, setClickedGraph] = useState(0);
      const [leftGrow, setLeftGrow] = useState(0);
      useEffect(() => {
            const timer = setTimeout(() => {
                  setIsVisible(true);
            }, 1000);

            return () => clearTimeout(timer);
      }, []);

      useEffect(() => {
            const leftelement = document.getElementById("leftFigHome")!;
            const rightelement = document.getElementById("RightFigHome")!;
            if (clickedGraph === 2) {
                  if (leftelement) {
                        // leftelement.classList.remove("left");
                        leftelement.classList.add("leftshrink");
                        leftelement.classList.remove("leftgrow");
                  }
            } else if (clickedGraph === 1) {
                  if (leftelement) {
                        leftelement.classList.add("leftgrow");
                        leftelement.classList.remove("leftshrink");
                  }
            }
      }
            , [clickedGraph]);

      useEffect(() => {
            const rightelement = document.getElementById("RightFigHome")!;
            if (leftGrow === 2) {
                  if (rightelement) {
                        rightelement.classList.add("rightgrow");
                        rightelement.classList.remove("rightshrink");
                  }
            } else if (leftGrow === 1) {
                  if (rightelement) {
                        rightelement.classList.add("rightshrink");
                        rightelement.classList.remove("rightgrow");
                  }
            }
      }
            , [leftGrow]);

      const Description = "Plastic is mainly a petroleum-derived non-biodegradable polymer. Today modern life is almost impossible without plastics."

      const detailsPreview = "It is estimated that around 343 MT of plastic is produced every year."

      return (
            <>

                  <div className="HomeFigure">
                        <div className=" box-container mt-[5vh] bg-[#fcfffc5f] ">

                              <div className="w-full">
                                    <div id="leftFigHome" className=" left " >

                                          <svg id="leftSvg"
                                                className="w-[50%] absolute delay-800"
                                                style={{ position: 'absolute' }}
                                          >
                                                <text x="50%" y={30} textAnchor="middle" dominantBaseline="middle" fill="#000" fontSize={18}>
                                                      Plastic Production Chart
                                                </text>
                                          </svg>

                                          <ResponsiveContainer width="100%" height='90%' className=' ' >
                                                <BarChart data={data} margin={{ top: 80, right: 30, left: 100, bottom: 5 }}>
                                                      <CartesianGrid strokeDasharray="3 3" />
                                                      <XAxis dataKey="Year" stroke="black" />
                                                      <YAxis stroke="black" label={{
                                                            value: 'Plastic Production (MT)',
                                                            angle: -90,
                                                            position: 'insideLeft',
                                                            textAnchor: 'middle',
                                                            dx: -30, // Adjust the distance from the Y-axis
                                                            fill: '#000', // Deep black color
                                                      }} />
                                                      <Legend />
                                                      <Bar animationDuration={800} dataKey="AnnualPlasticProduction.Value" name="Annual Plastic Production" fill="#8884d8" />
                                                </BarChart>
                                          </ResponsiveContainer>
                                    </div>
                              </div>
                              <div className="w-full">
                                    <div id="rightFigHome" className=" right " >

                                          <div className=" Description">
                                                {Description}
                                          </div>
                                          <div className=" detailsPreview">
                                                {detailsPreview}
                                          </div>



                                    </div>
                              </div>

                        </div >
                  </div>

            </>
      );
}

export default GlobalPlasticProduction;
