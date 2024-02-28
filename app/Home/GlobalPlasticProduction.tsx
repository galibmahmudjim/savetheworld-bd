"use client";
import React, { useEffect, useState, PureComponent } from "react";
import Image from "next/image";
import "./home.css";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';

type Props = {
      onCallback: (value: string) => void;
};
const GlobalPlasticProduction = ({ onClick }: { onClick: () => void }) => {

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

      // useEffect(() => {
      //       const timer = setTimeout(() => {
      //             setIsVisible(true);
      //       }, 1000);

      //       return () => clearTimeout(timer);
      // }, []);


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

                              <div className={`${leftGrow !== 2 ? "hidden" : "text-black text-[40px] w-full pl-32 pt-10 text-start absolute cursor-pointer"}`}>
                                    <IoArrowBack onClick={() => {
                                          resetState();
                                          onClick();
                                    }} />
                              </div>
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
                                          <a className={`${leftGrow !== 2 ? 'absolute bottom-[7%] right-[50%] p-4 text-white  normal-case normal opacity-50 no-underline text-[90%]' : 'hidden'}`}
                                                href="https://www.freepik.com/">
                                                Designed by Freepik
                                          </a>
                                    </div>
                              </div>
                              <div className={`w-full h-full ${leftGrow === 2 ? 'mt-[5%]' : 'mt-[10%]'}`}>
                                    <div id="rightFigHome" className=" right " >

                                          <div className={`${leftGrow === 2 ? 'Description text-center' : 'Description'}`}>
                                                {Description}
                                          </div>
                                          <div className={`${leftGrow === 2 ? 'hidden' : 'mt-[30px] text-[22px] cursor-pointer text-blue-700'}`}
                                                onClick={() => {
                                                      onClick();
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

                                          <div className={`${leftGrow !== 2 ? 'hidden' : 'detailsPreview'}`}>
                                                <ul className="ulHome">
                                                      <li className="checkmark">It is estimated that around 343 million tonnes (MT) of plastic is produced every year.</li>
                                                      <li className="checkmark">Plastic Wastes (PW) are produced by massive manufacturing, processing, and packaging industries.</li>
                                                      <li className="checkmark">More than 20 billion plastic bottles are tossed on earth.</li>
                                                      <li className="checkmark">Only approximately 10% of total world plastic is recycled.</li>
                                                      <li className="checkmark">Plastic visibility is increasing due to plastic accumulation and its harmful influence on the environment and human health.</li>

                                                </ul>

                                          </div>




                                    </div>
                              </div>

                        </div >
                  </div >

            </>
      );
}

export default GlobalPlasticProduction;
