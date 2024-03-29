
const Footer = () => {
      return (
            <div className="w-full h-full">
                  <div className="flex-nowrap text-nowrap h-full flex flex-row justify-center gap-[5%] w-full items-start mt-[20vh]">
                        <div>
                              <div className=" font-sans font-semibold text-black text-xl">Home</div>
                              <div className=" font-sans font-semibold text-black text-xl">Plastic Threat</div>
                              <div className=" font-sans font-semibold text-black text-xl">Facts & Figures</div>
                              <div className=" font-sans font-semibold text-black text-xl">Reduce, Reuse, Recycle (3R)</div>
                        </div>
                        <div>
                              <div className=" font-sans font-semibold text-black text-xl">Kids’ Corner</div>
                              <div className=" font-sans font-semibold text-black text-xl">Media</div>
                              <div className=" font-sans font-semibold text-black text-xl">FAQs</div>
                        </div>
                  </div>
                  <footer className="w-full h-full flex flex-col my-[15vh] mt-[20vh]  justify-start items-start">
                        <div className="w-full h-full flex flex-row justify-around items-start">
                              <div className="flex-nowrap text-nowrap h-full flex  flex-col justify-start items-start">
                                    <h3 className="font-sans font-bold text-white mb-2">Contact:</h3>
                                    <div className=" font-sans font-semibold text-white text-lg">jesmin@du.ac.bd</div>
                                    <div className=" font-sans font-semibold text-white text-lg">Dept. of Genetic Engg., & Biotechnology</div>
                                    <div className=" font-sans font-semibold text-white text-lg">University of Dhaka, Bangladesh</div>

                                    <div className=" font-sans font-semibold text-white text-lg">Copyright ©2023 All rights reserved</div>
                              </div>
                              <div className="flex-nowrap text-nowrap h-full flex flex-col justify-start items-start">
                                    <h3 className="font-sans font-bold text-white mb-2">Quick Links</h3>
                                    <div className=" font-sans font-semibold text-white text-lg">Home</div>
                                    <div className=" font-sans font-semibold text-white text-lg">Plastic Threat</div>
                                    <div className=" font-sans font-semibold text-white text-lg">Facts & Figures</div>
                                    <div className=" font-sans font-semibold text-white text-lg">Reduce, Reuse, Recycle (3R)</div>
                                    <div className=" font-sans font-semibold text-white text-lg">Kids’ Corner</div>
                                    <div className=" font-sans font-semibold text-white text-lg">Media</div>
                                    <div className=" font-sans font-semibold text-white text-lg">FAQs</div>
                              </div>
                              <div className=" h-full flex flex-col justify-start items-start flex-nowrap text-nowrap font-sans text-2xl">
                                    <h3 className="font-sans font-bold text-white mb-2">Social Media:</h3>
                                    <div className="flex flex-row justify-around gap-[4px] mt-1 w-full items-center ">
                                          <img src="/facebook.png" alt="" className="w-[40px]" />

                                          <img src="/twitter.png" alt="" className="w-[40px]" />
                                    </div>
                              </div>
                        </div>
                        <div className="w-full flex flex-row justify-start mt-[5vh] font-sans font-semibold text-white text-[15px] ml-[8%] ">Copyright ©2023 All rights reserved</div>
                  </footer>
            </div>
      );
}


export default Footer;