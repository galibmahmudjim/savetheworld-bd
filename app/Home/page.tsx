"use client";
import React, { useEffect, useState, PureComponent } from "react";
import Image from "next/image";
import "./home.css";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation';
import AboutPlastic from "./(components)/aboutPlastic";
import PlasticComprises from "./(components)/PlasticComprises";
import LifePlastics from "./(components)/LifePlastics";

type Props = {
      onCallback: (value: string) => void;
};
const Home = () => {

      // const [isVisible, setIsVisible] = useState(false);
      const [clickedGraph, setClickedGraph] = useState(0);
      const [leftGrow, setLeftGrow] = useState(2);
      const [fact, setFact] = useState(false);

      const router = useRouter();
      const params = useSearchParams();
      const index = parseInt(params.get('index') || '0');





      const Description = "Save The World, Bangladesh is a plastic pollution awareness portal is developed as part of a research collaborative initiative between the University of Dhaka and East West University, Bangladesh. This portal is dedicated to creating awareness among people from all walks of life and industries about the detrimental effects of plastic pollution on the environment and promoting sustainable solutions to reduce plastic waste. Plastic pollution poses a serious threat to the environment, wildlife, and human health, and contributes to global warming and climate change. Now, it is high time to take action to protect our mother Earth from further plastic pollution. "

      const [indexs, setIndexs] = useState(0);

      useEffect(() => {
            if (index === 1) {
                  setIndexs(1);
            }
      }
            , [index]);



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
                                                      <p className="text-[22px] font-[300] mt-2 ml-10 mb-4 paragraph">
                                                            Plastic is mainly a petroleum-derived non-biodegradable polymer. Today modern life is almost impossible without plastics.
                                                            <span className="text-[#4a218b] ml-2 hover:underline cursor-pointer"
                                                                  onClick={() => {
                                                                        setIndexs(1);
                                                                  }}
                                                                  {...(indexs === 1 ? { style: { display: "none" } } : {})}
                                                            > More </span>
                                                      </p>
                                                      {indexs === 1 ? <AboutPlastic /> : null}

                                                </div>

                                                <div className="flex flex-col  h-full ml-1">
                                                      <h4 className=" font-[900]">
                                                            Plastic comprises

                                                      </h4>
                                                      {indexs === 2 ? <p></p> : null}
                                                      <p className={` mb-4 paragraph ${indexs === 2 ? "hidden" : ""}`}>
                                                            5-12% of the world's total waste is plastic waste (PW)(World Bank Report)
                                                            <span className="text-[#4a218b] ml-2 hover:underline cursor-pointer"
                                                                  onClick={() => {
                                                                        setIndexs(2);
                                                                  }}
                                                                  {...(indexs === 2 ? { style: { display: "none" } } : {})}
                                                            > More </span>
                                                      </p>
                                                      {indexs === 2 ? <PlasticComprises /> : null}

                                                </div>
                                                <div className="flex flex-col  h-full ml-1">
                                                      <h4 className=" font-[900]">
                                                            Life of plastics

                                                      </h4>
                                                      <p className="text-[22px] font-[300] mt-2 ml-10 mb-4 paragraph">

                                                            Plastic products can take hundreds of years to decompose, with fishing line lasting the longest at 600 years.

                                                            <span className="text-[#4a218b] ml-2 hover:underline cursor-pointer"
                                                                  onClick={() => {
                                                                        setIndexs(3);
                                                                  }}
                                                                  {...(indexs === 3 ? { style: { display: "none" } } : {})}
                                                            > More </span>
                                                      </p>
                                                      {indexs === 3 ? <LifePlastics /> : null}

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
