"use client";
import React, { useEffect, useState, PureComponent } from "react";
import Image from "next/image";
import "../main.css";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';

type Props = {
      onCallback: (value: string) => void;
};
const HomeDetails = ({ onClick }: { onClick: () => void }) => {

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
                                    <div id="leftFigHome" className=" left overflow-hidden" >

                                          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                                                <Image
                                                      alt='Mountains'
                                                      src='/aboutplasticfig.jpeg'
                                                      fill
                                                      style={{ borderRadius: '10px' }}
                                                />
                                          </div>
                                          <a className='absolute bottom-[8.6%] right-[49%] p-4 text-white  normal-case normal opacity-50 no-underline text-[70%]'
                                                href="https://www.freepik.com/">
                                                Designed by Freepik
                                          </a>
                                    </div>
                              </div>
                              <div className='w-full h-full mb-8 mt-[3%]'>
                                    <div id="rightFigHome" className=" right " >

                                          <div className='Description'>
                                                <h1 className="text-[40px] font-bold mb-3">Bangladesh | Save The World </h1>
                                                <p className="text-[24px] font-[300]">{Description}
                                                      <span className='mt-[30px] text-[22px] cursor-pointer text-blue-700 ml-2 hover:underline'
                                                            onClick={() => {
                                                                  router.push('/Home');
                                                            }}
                                                      >   More</span>
                                                </p>
                                          </div>
                                    </div>
                              </div>

                        </div >
                  </div >

            </>
      );
}

export default HomeDetails;
