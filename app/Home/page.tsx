"use client";
import React, { useEffect, useState, PureComponent, Suspense } from "react";
import Image from "next/image";
import "../home.css";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { FiMinusSquare } from "react-icons/fi";
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import AboutPlastic from "./aboutPlastic";
import PlasticComprises from "./PlasticComprises";
import LifePlastics from "./LifePlastics";
import { BiAddToQueue } from "react-icons/bi";
import { BsSignIntersection, BsSignIntersectionY } from "react-icons/bs";
import GlobalPlastic from "./GlobalPlastic";
import CovidPlastic from "./CovidPlastic";

type Props = {
      onCallback: (value: string) => void;
};


const Home = () => {
      const [clickedGraph, setClickedGraph] = useState(0);
      const [leftGrow, setLeftGrow] = useState(2);
      const [fact, setFact] = useState(false);
      const pathname = usePathname();

      const router = useRouter();
      const index = parseInt('0');




      const Description = () => <p className="sub">Save The World, a plastic pollution awareness portal, has been developed as part of a research collaborative initiative between the University of Dhaka and East West University, Bangladesh. This portal is dedicated to creating awareness among people from all walks of life and industries about the detrimental effects of plastic pollution on the environment and to promoting sustainable solutions to reduce plastic waste. Plastic pollution poses a serious threat to the environment, wildlife, and human health, and contributes to global warming and climate change. Now, it is high time to take action to protect our Mother Earth from further plastic pollution.</p>

      const [indexs, setIndexs] = useState(0);



      // State to hold your fetched data
      const [data, setData] = useState(null);
      const params = useSearchParams();
      const [first, setFirst] = useState(true);
      useEffect(() => {
            if (params.has('index')) {
                  setIndexs(parseInt(params.get('index') || '0'));
                  if (indexs === 1 as number) {
                        router.push('/Home#Home1idx');
                  }
                  else if (indexs === 2 as number) {
                        router.push('/Home#Home2idx');
                  }
                  else if (indexs === 3 as number) {
                        router.push('/Home#Home3idx');
                  }
                  else if (indexs === 4 as number) {
                        router.push('/Home#Home4idx');
                  }
                  else if (indexs === 5 as number) {
                        router.push('/Home#Home5idx');
                  }
                  router.replace('/Home');

            }

      }
            , [params]);
      // Suspense fallback while loading
      const loading = <div>Loading...</div>;

      return (


            <div className="HomeBody">
                  <div className=" box-container mt-[7vh] bg-[#fcfffc5f] ">
                        <div className='w-full h-full mb-8 mt-[3%]'>
                              <div id="rightFigHome" className=" body " >
                                    <div className='Description'>
                                          <h1 className="  titled">Bangladesh | Save The World </h1>
                                          <Description />
                                    </div>
                                    <div className='contains'>

                                          <div id="Home1idx" className="options ">
                                                <div className="  h4Sub"
                                                      onClick={() => {
                                                            if (indexs === 1) {
                                                                  setIndexs(0);
                                                            }
                                                            else {
                                                                  setIndexs(1);
                                                            }

                                                      }}
                                                >
                                                      About Plastics{indexs !== 1 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 1 ? <AboutPlastic /> : null}

                                          </div>

                                          <div id="Home2idx" className="options">
                                                <div className="   h4Sub "
                                                      onClick={() => {
                                                            if (indexs === 2) {
                                                                  setIndexs(0);
                                                            }
                                                            else {
                                                                  setIndexs(2);
                                                            }

                                                      }}
                                                >
                                                      Plastic wastes{indexs !== 2 ? <BiAddToQueue className="font-extrabold" /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 2 ? <PlasticComprises /> : null}

                                          </div>
                                          <div id="Home3idx" className="options">
                                                <div className="   h4Sub "
                                                      onClick={() => {
                                                            if (indexs === 3) {
                                                                  setIndexs(0);
                                                            }
                                                            else {
                                                                  setIndexs(3);
                                                            }

                                                      }}
                                                >
                                                      Life of plastics{indexs !== 3 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 3 ? <LifePlastics /> : null}

                                          </div>
                                          <div id="Home4idx" className="options">
                                                <div className=" h4Sub "
                                                      onClick={() => {
                                                            if (indexs === 4) {
                                                                  setIndexs(0);
                                                            }
                                                            else {
                                                                  setIndexs(4);
                                                            }

                                                      }}
                                                >
                                                      Global Top Plastic Producers{indexs !== 4 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 4 ? <GlobalPlastic /> : null}

                                          </div>
                                          <div id="Home5idx" className="options">
                                                <div className="   h4Sub "
                                                      onClick={() => {
                                                            if (indexs === 5) {
                                                                  setIndexs(0);
                                                            }
                                                            else {
                                                                  setIndexs(5);
                                                            }

                                                      }}
                                                >
                                                      COVID-19 & Plastic{indexs !== 5 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 5 ? <CovidPlastic /> : null}

                                          </div>
                                    </div>




                              </div>
                        </div>

                  </div >
            </div >

      );
}


export default Home;

