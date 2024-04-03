'use client';
import { useRouter } from 'next/navigation';
import "../styles/header.css";
import "../app/globals.css";
import { useEffect } from 'react';
import Image from 'next/image';
import { TbPoint, TbPointFilled } from "react-icons/tb";

function handleClick() {
      alert('Image clicked!');
}

const LanguageSelect = () => {
      return (
            <div className='w-full h-full flex flex-row justify-end items-center gap-2 text-[20px]'>
                  <div className='font-sans fontSize font-bold text-[#23336A] flex flex-row justify-end items-start  cursor-pointer on banlangicon' >
                        <TbPoint className='banglanoselect' color="#23336A" size={20} />
                        <TbPointFilled className='banglaselect' color="#0131cc" size={20} />
                        বাংলা
                  </div>
                  <div className='font-sans  font-bold text-[#23336A] flex flex-row justify-center items-center cursor-pointer englangicon'>
                        <TbPoint className='banglanoselect' color="#23336A" size={20} />
                        <TbPointFilled className='banglaselect' color="#0131cc" size={20} />
                        English
                  </div>

            </div>
      );
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
            <div className="header justify-center items-center ">
                  <div className="header-1">
                        <div className="left h-full " onClick={() => {
                              router.push("/main");
                              router.refresh();
                        }}>
                              <img

                                    className="logo h-[100%]  " src="/LogoFigma.svg" alt="logo">
                              </img>

                        </div>
                        <div id='center-header' className="center" onClick={() => { }}>
                              <div className="title-h1 text-[#23336A]">A Plastic Pollution Awareness Portal</div>
                        </div>
                        <div id='right-header' className="right " >
                              <div className="w-full h-[55%] gap-2 flex flex-row justify-end items-end ">
                                    <img className="duewu " src="/duewu.png" alt="university-logo" />
                              </div>
                              <div className="w-full h-[25%] mt-3 gap-2 flex flex-row justify-around items-end ">
                                    <LanguageSelect />
                              </div>
                        </div>
                  </div>
            </div >
      )
}

export default Headers;