"use client";
import React, { useEffect, useState, PureComponent } from "react";
import Image from "next/image";
import "./home.css";
import Link from "next/link";

const GlobalPlasticProduction = () => {

      const [isVisible, setIsVisible] = useState(false);
      const [clickedGraph, setClickedGraph] = useState(0);
      const [leftGrow, setLeftGrow] = useState(0);
      const [fact, setFact] = useState(false);
      useEffect(() => {
            const timer = setTimeout(() => {
                  setIsVisible(true);
            }, 1000);

            return () => clearTimeout(timer);
      }, []);


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

      const Description = "Plastic is mainly a petroleum-derived non-biodegradable polymer. Today modern life is almost impossible without plastics."

      const detailsPreview = "It is estimated that around 343 MT of plastic is produced every year."

      return (
            <>

                  <div className="HomeFigure ">
                        <div className=" box-container mt-[5vh] bg-[#fcfffc5f] ">

                              <div className={`${leftGrow === 2 ? 'widthShrinkHome' : 'widthGrowHome'}`}>
                                    <div id="leftFigHome" className=" left overflow-hidden" >

                                          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                                <Image
                                                      alt='Mountains'
                                                      src='/aboutplasticfig.jpeg'
                                                      fill
                                                      style={{ borderRadius: '10px' }}
                                                />
                                          </div>
                                          <a className={`absolute bottom-[7%] right-[50%] p-4 text-white  normal-case normal opacity-50 no-underline text-[90%]" href="www.freepik.com ${leftGrow !== 2 ? 'block' : 'none'}`}>
                                                Designed by Freepik
                                          </a>
                                    </div>
                              </div>
                              <div className="w-full h-full mt-[10%]">
                                    <div id="rightFigHome" className=" right " >

                                          <div className=" Description">
                                                {Description}
                                          </div>
                                          <div className={`${leftGrow === 2 ? 'hidden' : 'mt-[30px] text-[22px] cursor-pointer text-blue-700'}`}
                                                onClick={() => {
                                                      if (leftGrow === 1 || leftGrow === 0) {
                                                            setLeftGrow(2);
                                                      }
                                                      else {
                                                            setLeftGrow(1);
                                                      }
                                                }}
                                          >
                                                Learn More
                                          </div>




                                    </div>
                              </div>

                        </div >
                  </div >

            </>
      );
}

export default GlobalPlasticProduction;
