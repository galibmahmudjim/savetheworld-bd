"use client";
import React, { useEffect, useState, PureComponent, Suspense } from "react";
import "../home.css";
import { FiMinusSquare } from "react-icons/fi";
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { BiAddToQueue } from "react-icons/bi";
import Effectenv from "./Effectenv";
import Airpollution from "./Airpoll";
import Soilpoll from "./Soilpoll";
import Marinepollution from "./Marinepollution";
import Humanhealth from "./Humanhealth";
import Climatechange from "./Climatechange";
import Social from "./Social";
import Econ from "./Econ";
import BackButton from "@/components/Back";

type Props = {
      onCallback: (value: string) => void;
};


const PlasticThreat = () => {
      const [clickedGraph, setClickedGraph] = useState(0);
      const [leftGrow, setLeftGrow] = useState(2);
      const [fact, setFact] = useState(false);
      const pathname = usePathname();

      const router = useRouter();
      const index = parseInt('0');




      const Description = () => <p className="sub">Plastic pollution is a serious threat to the environment, wildlife, and human health. It is estimated that by 2050, there will be more plastic in the ocean than fish. Plastic waste not only harms marine life and pollutes our waterways but also affects human health and contributes to global warming and climate change. According to the United Nations Environment Program (UNEP), Plastic Pollution is one of the most emerging environmental problems in oceans.</p>

      const [indexs, setIndexs] = useState(0);



      // State to hold your fetched data
      const [data, setData] = useState(null);
      const params = useSearchParams();
      const [first, setFirst] = useState(true);
      useEffect(() => {
            if (params.has('index')) {
                  setIndexs(parseInt(params.get('index') || '0'));
                  if (indexs === 1 as number) {
                        router.push('/Plastic-threat#Home1idx');
                  }
                  else if (indexs === 2 as number) {
                        router.push('/Plastic-threat#Home2idx');
                  }
                  else if (indexs === 3 as number) {
                        router.push('/Plastic-threat#Home3idx');
                  }
                  else if (indexs === 4 as number) {
                        router.push('/Plastic-threat#Home4idx');
                  }
                  else if (indexs === 5 as number) {
                        router.push('/Plastic-threat#Home5idx');
                  }
                  else if (indexs === 6 as number) {
                        router.push('/Plastic-threat#Home6idx');
                  }
                  else if (indexs === 7 as number) {
                        router.push('/Plastic-threat#Home7idx');
                  }
                  else if (indexs === 8 as number) {
                        router.push('/Plastic-threat#Home8idx');
                  }

                  router.replace('/Plastic-threat');

            }

      }
            , [params]);
      // Suspense fallback while loading
      const loading = <div>Loading...</div>;

      return (


            <div className="HomeBody">
                  <div className=" box-container mt-[7vh] bg-[#fcfffc5f] ">
                        <div className='w-full h-full mb-8'>
                              <div id="rightFigHome" className=" body " >
                                    <div className="back ">
                                          <BackButton />
                                    </div>
                                    <div className='Description'>
                                          <h1 className="  titled">Plastic Threat</h1>
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
                                                      Effect on Environment{indexs !== 1 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 1 ? <Effectenv /> : null}

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
                                                      Air Pollution{indexs !== 2 ? <BiAddToQueue className="font-extrabold" /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 2 ? <Airpollution /> : null}

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
                                                      Soil Pollution
                                                      {indexs !== 3 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 3 ? <Soilpoll /> : null}

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
                                                      Marine Pollution
                                                      {indexs !== 4 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 4 ? <Marinepollution /> : null}

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
                                                      Human Health{indexs !== 5 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 5 ? <Humanhealth /> : null}

                                          </div>
                                          <div id="Home6idx" className="options">
                                                <div className="   h4Sub "
                                                      onClick={() => {
                                                            if (indexs === 6) {
                                                                  setIndexs(0);
                                                            }
                                                            else {
                                                                  setIndexs(6);
                                                            }

                                                      }}
                                                >
                                                      Climate Change{indexs !== 6 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 6 ? <Climatechange /> : null}

                                          </div>
                                          <div id="Home7idx" className="options">
                                                <div className="   h4Sub "
                                                      onClick={() => {
                                                            if (indexs === 7) {
                                                                  setIndexs(0);
                                                            }
                                                            else {
                                                                  setIndexs(7);
                                                            }

                                                      }}
                                                >
                                                      Social Impact{indexs !== 7 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 7 ? <Social /> : null}

                                          </div>
                                          <div id="Home8idx" className="options">
                                                <div className="   h4Sub "
                                                      onClick={() => {
                                                            if (indexs === 8) {
                                                                  setIndexs(0);
                                                            }
                                                            else {
                                                                  setIndexs(8);
                                                            }

                                                      }}
                                                >
                                                      Economic Burden{indexs !== 8 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 8 ? <Econ /> : null}

                                          </div>
                                    </div>




                              </div>
                        </div>

                  </div >
            </div >

      );
}


export default PlasticThreat;

