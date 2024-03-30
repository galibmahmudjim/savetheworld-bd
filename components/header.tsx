'use client';
import { useRouter } from 'next/navigation';
import "../styles/header.css";
import "../app/globals.css";
import { useEffect } from 'react';
import Image from 'next/image';
import { TbPointFilled } from "react-icons/tb";

function handleClick() {
      alert('Image clicked!');
}
const Headers = (): JSX.Element => {
      const router = useRouter();
      useEffect(() => {
            const handleScroll = () => {

                  const element = document.getElementById('center-header');
                  const rightElement = document.getElementById('right-header');
                  if (window.scrollY === 0) {
                        if (element && rightElement) {
                              element.classList.add('movein')
                              element.classList.remove('moveout')
                              rightElement.classList.add('movein')
                              rightElement.classList.remove('moveout')
                        }
                  } else {
                        if (element && rightElement) {
                              element.classList.add('moveout')
                              element.classList.remove('movein')
                              rightElement.classList.add('moveout')
                              rightElement.classList.remove('movein')
                        }
                  }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, []);

      return (
            <div className="header justify-center items-center">
                  <div className="header-1">
                        <div className="left h-full ">
                              <img onClick={() => {
                                    router.push("/");
                                    router.refresh();
                              }}

                                    className="logo w-32   hover:w-96" src="/logo.png" alt="logo">
                              </img>

                        </div>
                        <div id='center-header' className="center" onClick={() => { }}>
                              <div className="title-h1 text-[#23336A]">A Plastic Pollution Awareness Portal</div>
                        </div>
                        <div id='right-header' className="right " >
                              <div className="w-full h-[55%] gap-2 flex flex-row justify-around items-end ">
                                    <a href="https://www.du.ac.bd" target="_blank" className='w-full flex-1 flex flex-row justify-end '>
                                          <img className="du" src="/du.png" alt="university-logo" />
                                    </a>
                                    <a href="https://www.ewubd.edu/" target="_blank" className='w-full flex flex-1 flex-row justify-start'>
                                          <img className="ewu" src="/ewu.png" alt="East West university" />
                                    </a>
                              </div>
                              <div className="w-full h-[35%] mt-2 gap-2 flex flex-row justify-around items-end ">
                                    <div className='w-full h-full flex flex-row justify-center items-center gap-2'>
                                          <div className='font-RocknRoll text-[20px] font-bold text-[#000000] flex flex-row justify-center items-center  cursor-pointer'>
                                                <TbPointFilled color="#03070E" size={22} />
                                                বাংলা
                                          </div>
                                          <div className='font-RocknRoll text-[20px] font-bold text-[#000000] flex flex-row justify-center items-center  cursor-pointer'>
                                                <TbPointFilled color="#03070E" size={22} />
                                                English
                                          </div>

                                    </div>
                              </div>
                        </div>
                  </div>
            </div >
      )
}

export default Headers;