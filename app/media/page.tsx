"use client";
import React, { useEffect, useState, PureComponent, Suspense } from "react";
import Image from "next/image";
import "../home.css";
import { IoArrowBack } from "react-icons/io5";
import Link from "next/link";
import { FiMinusSquare } from "react-icons/fi";
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { BiAddToQueue } from "react-icons/bi";
import { BsSignIntersection, BsSignIntersectionY } from "react-icons/bs";
import BackButton from "@/components/Back";
import Nat from "./Nat";

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




      const Description = () => <p className="sub mt-10">Save The World, a plastic pollution awareness portal, has been developed as part of a research collaborative initiative between the University of Dhaka and East West University, Bangladesh. This portal is dedicated to creating awareness among people from all walks of life and industries about the detrimental effects of plastic pollution on the environment and to promoting sustainable solutions to reduce plastic waste. Plastic pollution poses a serious threat to the environment, wildlife, and human health, and contributes to global warming and climate change. Now, it is high time to take action to protect our Mother Earth from further plastic pollution.</p>

      const [indexs, setIndexs] = useState(0);



      // State to hold your fetched data
      const [data, setData] = useState(null);
      const params = useSearchParams();
      const [first, setFirst] = useState(true);

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

                                    </div>
                                    <div className='contains'>

                                          <div id="Home1idx" className="options ">
                                                <div className="  h4Sub"
                                                >
                                                      <Nat />
                                                </div>


                                          </div>
                                    </div>




                              </div>
                        </div>

                  </div >
            </div >

      );
}


export default Home;

