'use client';
import { useRouter } from "next/navigation";

const Footer = () => {
      const router = useRouter();
      return (
            <div className="w-full h-full font-['Inter', sans-serif] ">
                  <div className="flex-nowrap text-nowrap h-full flex flex-row justify-center gap-[10%] w-full items-start mt-[20vh] font-semibold">
                        <div>
                              <div className="text-white mt-2 text-[32px] cursor-pointer">Home</div>
                              <div className="text-white mt-2 text-[32px] cursor-pointer">Plastic Threat</div>
                              <div className="text-white mt-2 text-[32px] cursor-pointer">Facts & Figures</div>
                              <div className="text-white mt-2 text-[32px] cursor-pointer">3R</div>
                        </div>
                        <div>
                              <div className="text-white mt-2 text-[32px] cursor-pointer">Kids’ Corner</div>
                              <div className="text-white mt-2 text-[32px] cursor-pointer">Media</div>
                              <div className="text-white mt-2 text-[32px] cursor-pointer">FAQs</div>
                        </div>
                  </div>
                  <footer className="w-full h-full flex flex-col my-[15vh] mt-[15vh]  justify-start items-start">
                        <div className="w-full h-full flex flex-row justify-around items-start">
                              <div className="flex-nowrap text-nowrap h-full flex  flex-col justify-start items-start">
                                    <div className="text-[25px] font-bold text-white mb-4">Contact:</div>
                                    <div className=" font-semibold text-white text-[20px] mb-3">jesmin@du.ac.bd</div>
                                    <div className=" font-semibold text-white text-[20px] mb-3">Dept. of Genetic Engg., & Biotechnology</div>
                                    <div className=" font-semibold text-white text-[20px] mb-3">University of Dhaka, Bangladesh</div>

                                    <div className=" font-semibold text-white text-[20px] mb-3">©2023</div>
                              </div>
                              <div className="flex-nowrap text-nowrap h-full flex flex-col justify-start items-start">
                                    <h3 className="font-bold text-white text-[25px] mb-4">Quick Links</h3>
                                    <div className=" font-semibold text-white text-[20px] mb-3" onClick={() => {
                                          router.push('/Home');
                                    }}>Home</div>
                                    <div className=" font-semibold text-white text-[20px] mb-3" onClick={() => {
                                          router.push('/Plastic-threat');
                                    }}>Plastic Threat</div>
                                    <div className=" font-semibold text-white text-[20px] mb-3" >Facts & Figures</div>
                                    <div className=" font-semibold text-white text-[20px] mb-3">Reduce, Reuse, Recycle (3R)</div>
                                    <div className=" font-semibold text-white text-[20px] mb-3">Kids’ Corner</div>
                                    <div className=" font-semibold text-white text-[20px] mb-3">Media</div>
                                    <div className=" font-semibold text-white text-[20px] mb-3">FAQs</div>
                              </div>
                              <div className=" h-full flex flex-col justify-start items-start flex-nowrap text-nowrap text-[30px] text-white  font-semibold font-sans gap-3 mt-5">
                                    <div className="flex flex-row justify-around gap-[20px] mt-1 w-full items-center  hover:scale-105">
                                          <img src="/fb.png" alt="" className="w-[40px]" />
                                          <div className="w-full justify-center items-start">Facebook</div>
                                    </div>
                                    <div className="flex flex-row justify-around gap-[20px] mt-1 w-full items-center  hover:scale-105">
                                          <img src="/youtube.png" alt="" className="w-[40px]" />
                                          <div className="w-full justify-center items-start">YouTube</div>
                                    </div>
                                    <div className="flex flex-row justify-around gap-[20px] mt-1 w-full items-center  hover:scale-105">
                                          <img src="/twitter.png" alt="" className="w-[40px]" />
                                          <div className="w-full justify-center items-start">Twitter</div>
                                    </div>
                                    <div className="flex flex-row justify-around gap-[20px] mt-1 w-full items-center  hover:scale-105">
                                          <img src="/insta.png" alt="" className="w-[40px]" />
                                          <div className="w-full justify-center items-start">Instagram</div>
                                    </div>
                              </div>
                        </div>
                        <div className="w-full flex flex-row justify-center   mt-[5vh] font-semibold text-white text-[18px]  ">
                              <div className="w-full ">

                              </div>

                        </div>
                  </footer>
            </div>
      );
}


export default Footer;