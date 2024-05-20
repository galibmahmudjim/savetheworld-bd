"use client";
import React, { useEffect, useState, PureComponent, Suspense } from "react";
import Image from "next/image";
import "../home.css";
import { FiMinusSquare } from "react-icons/fi";
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { BiAddToQueue } from "react-icons/bi";
import Reduce from "./Reduce";
import CountryBanned from "./CountryBanned";
import RR from "./RR";
import Plasticalt from "./Plsticalt";
import BD3r from "./BD3r";
import Sol from "./Sol";
import BackButton from "@/components/Back";

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




      const Description = () => <p className="sub"></p>

      const [indexs, setIndexs] = useState(0);



      // State to hold your fetched data
      const [data, setData] = useState(null);
      const params = useSearchParams();
      const [first, setFirst] = useState(true);
      useEffect(() => {
            if (params.has('index')) {
                  setIndexs(parseInt(params.get('index') || '0'));
                  if (indexs === 1 as number) {
                        router.push('/3R#Home1idx');
                  }
                  else if (indexs === 2 as number) {
                        router.push('/3R#Home2idx');
                  }
                  else if (indexs === 3 as number) {
                        router.push('/3R#Home3idx');
                  }
                  else if (indexs === 4 as number) {
                        router.push('/3R#Home4idx');
                  }
                  else if (indexs === 5 as number) {
                        router.push('/3R#Home5idx');
                  }
                  else if (indexs === 6 as number) {
                        router.push('/3R#Home6idx');
                  }
                  router.replace('/3R');

            }

      }
            , [params]);
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
                                          <div className="  titled">Reduce, Reuse, Recycle (3R) </div>
                                          {/* <div className="text-[30px] mt-10 font-bold  tex-[#212223] ">Reduce</div>
                                          <div className="sub mt-3">One of the main reasons behind plastic pollution is the lack of awareness. People throughout the world and our country are not aware of the consequences of plastic pollution. We have to become more aware and create more awareness around us as much as we can so that we can save our environment from plastic pollution and for a better future for the next generation.
                                          </div> */}
                                    </div>
                                    <div className='contains mt-0'>

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
                                                      Reduce{indexs !== 1 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 1 ? <Reduce /> : null}

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
                                                      Countries banned plastic{indexs !== 2 ? <BiAddToQueue className="font-extrabold" /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 2 ? <CountryBanned /> : null}

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
                                                      Reuse & Recycle{indexs !== 3 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 3 ? <RR /> : null}

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
                                                      Plastic Alternatives{indexs !== 4 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 4 ? <Plasticalt /> : null}

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
                                                      Bangladesh 3R perspectives{indexs !== 5 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 5 ? <BD3r /> : null}

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
                                                      Solutions to tackle plastic waste{indexs !== 6 ? <BiAddToQueue /> : <FiMinusSquare />}
                                                </div>

                                                {indexs === 6 ? <Sol /> : null}

                                          </div>
                                    </div>




                              </div>
                        </div>

                  </div >
            </div >

      );
}


export default Home;

