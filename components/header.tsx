'use client';
import { useRouter } from 'next/navigation';
import "../styles/header.css";
import "../app/globals.css";
import { useEffect } from 'react';

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
            <div className="header">
                  <div className="header-1">
                        <div className="left">

                              <img onClick={() => router.push("/")}
                                    className="logo hover:w-96" src="/logo.png" alt="logo" />

                        </div>
                        <div id='center-header' className="center" onClick={() => { }}>
                              <h1 className="title">A plastic pollution Awareness: Students'  Outreach Program 2024</h1>
                        </div>
                        <div id='right-header' className="right" >
                              <a href="https://www.du.ac.bd" target="_blank" className='w-full flex-[2] flex flex-row justify-end '>
                                    <img className="du" src="/du.png" alt="university-logo" />
                              </a>
                              <a href="https://www.ewubd.edu/" target="_blank" className=' flex flex-1 flex-row justify-start '>
                                    <img className="ewu" src="/ewu.png" alt="East West university" />
                              </a>
                        </div>
                  </div>
            </div>
      )
}

export default Headers;