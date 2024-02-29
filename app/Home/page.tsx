"use client";
import React, { useEffect, useState, PureComponent } from "react";
import Image from "next/image";
import "./home.css";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import AboutPlastic from "./aboutPlastic";

type Props = {
      onCallback: (value: string) => void;
};
const Home = (index: number) => {

      // const [isVisible, setIsVisible] = useState(false);
      const [clickedGraph, setClickedGraph] = useState(0);
      const [leftGrow, setLeftGrow] = useState(2);
      const [fact, setFact] = useState(false);

      const router = useRouter();




      const Description = "Save The World, Bangladesh is a plastic pollution awareness portal is developed as part of a research collaborative initiative between the University of Dhaka and East West University, Bangladesh. This portal is dedicated to creating awareness among people from all walks of life and industries about the detrimental effects of plastic pollution on the environment and promoting sustainable solutions to reduce plastic waste. Plastic pollution poses a serious threat to the environment, wildlife, and human health, and contributes to global warming and climate change. Now, it is high time to take action to protect our mother Earth from further plastic pollution. "

      const [indexs, setIndexs] = useState(0);
      if (index === 1) {
            setIndexs(1);
      }


      return (
            <>


                  <div className="HomeBody">
                        <div className=" box-container mt-[7vh] bg-[#fcfffc5f] ">


                              <div className='w-full h-full mb-8 mt-[3%]'>
                                    <div id="rightFigHome" className=" body " >

                                          <div className='Description'>
                                                <h1 className="text-[40px] font-bold mb-3">Bangladesh | Save The World </h1>
                                                <p className="text-[24px] font-[300]">{Description}</p>
                                          </div>


                                          <div className='contains'>

                                                <div className="flex flex-col  h-full ml-1">
                                                      <h4 className=" font-[900]">
                                                            About Plastics
                                                      </h4>
                                                      <p className="text-[22px] font-[300] mt-2 ml-10">
                                                            Plastic is mainly a petroleum-derived non-biodegradable polymer. Today modern life is almost impossible without plastics.
                                                            <span className="text-[#4a218b] ml-2 hover:underline cursor-pointer"
                                                                  onClick={() => {
                                                                        setIndexs(1);
                                                                  }}
                                                                  {...(indexs === 1 ? { style: { visibility: "hidden" } } : {})}
                                                            > More </span>
                                                      </p>
                                                      {indexs === 1 ? <AboutPlastic /> : null}

                                                </div>
                                          </div>




                                    </div>
                              </div>

                        </div >
                  </div >

            </>
      );
}

export default Home;
