"use client";
import React, { useEffect, useState, PureComponent, Suspense } from "react";
import "../home.css";
import { FiMinusSquare } from "react-icons/fi";
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { BiAddToQueue } from "react-icons/bi";
import GlobalPlastic from "./GlobalPlastic";
import PlasticBangladesh from "./PlasticBangladesh";
import PlasticIndust from "./PlasticIndust";
import PlasticIndustPoll from "./PlasticIndustPoll";
import BackButton from "@/components/Back";

type Props = {
      onCallback: (value: string) => void;
};


const FactsFigs = () => {
      const [clickedGraph, setClickedGraph] = useState(0);
      const [leftGrow, setLeftGrow] = useState(2);
      const [fact, setFact] = useState(false);
      const pathname = usePathname();

      const router = useRouter();
      const index = parseInt('0');




      const Description = () => <p className="sub">Many high-income countries generate high amounts of plastic waste but are either better at processing it or exporting it to other countries. Meanwhile, many of the middle-income and low-income countries that both demand plastics and receive bulk exports have yet to develop the infrastructure needed to process it.
      </p>

      const [indexs, setIndexs] = useState(0);



      // State to hold your fetched data
      const [data, setData] = useState(null);
      const params = useSearchParams();
      const [first, setFirst] = useState(true);
      useEffect(() => {
            if (params.has('index')) {
                  setIndexs(parseInt(params.get('index') || '0'));
                  if (indexs === 1 as number) {
                        router.push('/Facts&Figs#Home1idx');
                  }
                  else if (indexs === 2 as number) {
                        router.push('/Facts&Figs#Home2idx');
                  }
                  else if (indexs === 3 as number) {
                        router.push('/Facts&Figs#Home3idx');
                  }
                  else if (indexs === 4 as number) {
                        router.push('/Facts&Figs#Home4idx');
                  }


                  router.replace('/Facts&Figs');

            }

      }
            , [params]);
      // Suspense fallback while loading
      const loading = <div>Loading...</div>;

      return (


            <div className="HomeBody">
                  <div className=" box-container mt-[7vh] bg-[#fcfffc5f] ">
                        <div className='w-full h-full mb-8 '>
                              <div id="rightFigHome" className=" body " >
                                    <div className="back ">
                                          <BackButton />
                                    </div>
                                    <div className='Description'>
                                          <h1 className="  titled">Facts & Figures
                                          </h1>
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
                                                      Global plastic waste generation{indexs !== 1 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 1 ? <GlobalPlastic /> : null}

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
                                                      Plastic in Bangladesh Statistics{indexs !== 2 ? <BiAddToQueue className="font-extrabold" /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 2 ? <PlasticBangladesh /> : null}

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
                                                      Plastic Industries & Revenue (Industrial Impact)
                                                      {indexs !== 3 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 3 ? <PlasticIndust /> : null}

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
                                                      Plastic Industry & Pollution
                                                      {indexs !== 4 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 4 ? <PlasticIndustPoll /> : null}

                                          </div>

                                    </div>




                              </div>
                        </div>

                  </div >
            </div >

      );
}


export default FactsFigs;

