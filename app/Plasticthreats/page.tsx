"use client";
import React, { useEffect, useState, PureComponent, Suspense } from "react";
import Image from "next/image";
import "./Plasicthreats.css";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import AboutPlastic from "./aboutPlastic";
import PlasticComprises from "./PlasticComprises";
import LifePlastics from "./LifePlastics";
import { BsSignIntersection, BsSignIntersectionY } from "react-icons/bs";
import GlobalPlastic from "./GlobalPlastic";
import CovidPlastic from "./CovidPlastic";
import { FaMinusCircle } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import Climate from "./Climate";
import Social from "./social";
import Econ from "./econ";

type Props = {
      onCallback: (value: string) => void;
};


const Plasticthreats = () => {
      const [clickedGraph, setClickedGraph] = useState(0);
      const [leftGrow, setLeftGrow] = useState(2);
      const [fact, setFact] = useState(false);
      const pathname = usePathname();

      const router = useRouter();
      const index = parseInt('0');




      const Description = "Plastic pollution is a serious threat to the environment, wildlife, and human health. It is estimated that by 2050, there will be more plastic in the ocean than fish. Plastic waste not only harms marine life and pollutes our waterways but also affects human health and contributes to global warming and climate change. According to the United Nations Environment Program (UNEP), Plastic Pollution is one of the most emerging environmental problems in oceans."

      const [indexs, setIndexs] = useState(0);



      // State to hold your fetched data
      const [data, setData] = useState(null);
      const params = useSearchParams();
      const [first, setFirst] = useState(true);
      useEffect(() => {
            if (params.has('index')) {
                  setIndexs(parseInt(params.get('index') || '0'));
                  if (indexs === 1 as number) {
                        router.push('/Plasicthreats#Plasicthreats1idx');
                  }
                  else if (indexs === 2 as number) {
                        router.push('/Plasicthreats#Plasicthreats2idx');
                  }
                  else if (indexs === 3 as number) {
                        router.push('/Plasicthreats#Plasicthreats3idx');
                  }
                  else if (indexs === 4 as number) {
                        router.push('/Plasicthreats#Plasicthreats4idx');
                  }
                  else if (indexs === 5 as number) {
                        router.push('/Plasicthreats#Plasicthreats5idx');
                  }

                  else if (indexs === 6 as number) {
                        router.push('/Plasicthreats#Plasicthreats6idx');
                  }
                  else if (indexs === 7 as number) {
                        router.push('/Plasicthreats#Plasicthreats7idx');
                  }
                  else if (indexs === 8 as number) {
                        router.push('/Plasicthreats#Plasicthreats8idx');
                  }
                  router.replace('/Plasicthreats');

            }

      }
            , [params]);
      // Suspense fallback while loading
      const loading = <div>Loading...</div>;

      return (
            <>


                  <div className="HomeBody">

                        <div className=" box-container mt-[7vh] bg-[#fcfffc5f] ">


                              <div className='w-full h-full mb-8 mt-[3%]'>
                                    <div id="rightFigHome" className=" body " >

                                          <div className='Description'>
                                                <h1 className=" mb-3 titled">Plastic threat</h1>
                                                <p className="text-[24px]  font-[300]">{Description}</p>
                                          </div>


                                          <div className='contains'>

                                                <div id="Home1idx" className="flex flex-col w-full  h-full ml-1">
                                                      <div className="   flex flex-row justify-start items-center align-middle gap-3 h4Sub text-[#4a218b] cursor-pointer"
                                                            onClick={() => {
                                                                  if (indexs === 1) {
                                                                        setIndexs(0);
                                                                  }
                                                                  else {
                                                                        setIndexs(1);
                                                                  }

                                                            }}
                                                      >
                                                            Effect on Environment{indexs !== 1 ? <FaPlusCircle /> : <FaMinusCircle />}
                                                      </div>

                                                      {indexs === 1 ? <AboutPlastic /> : null}

                                                </div>

                                                <div id="Home2idx" className="flex flex-col w-full h-full ml-1">
                                                      <div className="   flex flex-row justify-start items-center align-middle gap-3 h4Sub text-[#4a218b] cursor-pointer"
                                                            onClick={() => {
                                                                  if (indexs === 2) {
                                                                        setIndexs(0);
                                                                  }
                                                                  else {
                                                                        setIndexs(2);
                                                                  }

                                                            }}
                                                      >
                                                            Air Pollution{indexs !== 2 ? <FaPlusCircle className="font-extrabold" /> : <FaMinusCircle />}
                                                      </div>

                                                      {indexs === 2 ? <PlasticComprises /> : null}

                                                </div>
                                                <div id="Home3idx" className="flex flex-col w-full h-full ml-1">
                                                      <div className="   flex flex-row justify-start items-center align-middle gap-3 h4Sub text-[#4a218b] cursor-pointer"
                                                            onClick={() => {
                                                                  if (indexs === 3) {
                                                                        setIndexs(0);
                                                                  }
                                                                  else {
                                                                        setIndexs(3);
                                                                  }

                                                            }}
                                                      >
                                                            Soil Pollution{indexs !== 3 ? <FaPlusCircle /> : <FaMinusCircle />}
                                                      </div>

                                                      {indexs === 3 ? <LifePlastics /> : null}

                                                </div>
                                                <div id="Home4idx" className="flex flex-col w-full  h-full ml-1">
                                                      <div className="   flex flex-row justify-start items-center align-middle gap-3 h4Sub text-[#4a218b] cursor-pointer"
                                                            onClick={() => {
                                                                  if (indexs === 4) {
                                                                        setIndexs(0);
                                                                  }
                                                                  else {
                                                                        setIndexs(4);
                                                                  }

                                                            }}
                                                      >
                                                            Marine Pollution{indexs !== 4 ? <FaPlusCircle /> : <FaMinusCircle />}
                                                      </div>

                                                      {indexs === 4 ? <GlobalPlastic /> : null}

                                                </div>
                                                <div id="Home5idx" className="flex flex-col w-full  h-full ml-1">
                                                      <div className="   flex flex-row justify-start items-center align-middle gap-3 h4Sub text-[#4a218b] cursor-pointer"
                                                            onClick={() => {
                                                                  if (indexs === 5) {
                                                                        setIndexs(0);
                                                                  }
                                                                  else {
                                                                        setIndexs(5);
                                                                  }

                                                            }}
                                                      >
                                                            Human Health
                                                            {indexs !== 5 ? <FaPlusCircle /> : <FaMinusCircle />}
                                                      </div>

                                                      {indexs === 5 ? <CovidPlastic /> : null}

                                                </div>
                                                <div id="Home6idx" className="flex flex-col w-full  h-full ml-1">
                                                      <div className="   flex flex-row justify-start items-center align-middle gap-3 h4Sub text-[#4a218b] cursor-pointer"
                                                            onClick={() => {
                                                                  if (indexs === 6) {
                                                                        setIndexs(0);
                                                                  }
                                                                  else {
                                                                        setIndexs(6);
                                                                  }

                                                            }}
                                                      >
                                                            Climate Change
                                                            {indexs !== 6 ? <FaPlusCircle /> : <FaMinusCircle />}
                                                      </div>

                                                      {indexs === 6 ? <Climate /> : null}

                                                </div>
                                                <div id="Home7idx" className="flex flex-col w-full  h-full ml-1">
                                                      <div className="   flex flex-row justify-start items-center align-middle gap-3 h4Sub text-[#4a218b] cursor-pointer"
                                                            onClick={() => {
                                                                  if (indexs === 7) {
                                                                        setIndexs(0);
                                                                  }
                                                                  else {
                                                                        setIndexs(7);
                                                                  }

                                                            }}
                                                      >
                                                            Social Impact
                                                            {indexs !== 7 ? <FaPlusCircle /> : <FaMinusCircle />}
                                                      </div>

                                                      {indexs === 7 ? <Social /> : null}

                                                </div>
                                                <div id="Home8idx" className="flex flex-col w-full  h-full ml-1">
                                                      <div className="   flex flex-row justify-start items-center align-middle gap-3 h4Sub text-[#4a218b] cursor-pointer"
                                                            onClick={() => {
                                                                  if (indexs === 8) {
                                                                        setIndexs(0);
                                                                  }
                                                                  else {
                                                                        setIndexs(8);
                                                                  }

                                                            }}
                                                      >
                                                            Economic Burden
                                                            {indexs !== 8 ? <FaPlusCircle /> : <FaMinusCircle />}
                                                      </div>

                                                      {indexs === 8 ? <Econ /> : null}

                                                </div>



                                          </div>




                                    </div>
                              </div>

                        </div >
                  </div >

            </>
      );
}


export default Plasticthreats;

