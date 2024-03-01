'use client';
import { useEffect, useState } from 'react';
import '../styles/navtab.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

function NavTab() {
      const handleSelect = (eventKey: any) => alert(`selected ${eventKey}`);

      const [children, setChildren] = useState(null);
      const [current, setCurrent] = useState('');
      const currentPath = usePathname();
      const [activeKey, setActiveKey] = useState('1');

      useEffect(() => {
            if (currentPath === '/Home' || currentPath === '/') {
                  setActiveKey('1');
            }
      }
            , [currentPath]);

      const handleClick = (e: any) => {
            setCurrent(currentPath);
            console.log('click ', e);
            setCurrent(e.key);
      };


      useEffect(() => {
            const handleScroll = () => {

                  const element = document.getElementById('navcontainer');
                  const navbar = document.getElementById('navbar');
                  const navbarlist = document.getElementById('navbarlist');
                  if (navbar && element) {
                        navbar.classList.remove('animationroot')
                        element.classList.remove('animationnav')
                  }
                  if (window.scrollY === 0) {
                        if (element && navbar && navbarlist) {

                              navbarlist.classList.remove('widthshrink')
                              element.classList.remove('moveinnav')
                              element.classList.add('moveoutnav')
                              navbarlist.classList.add('widthgrow')
                        }
                  } else {
                        if (element && navbar && navbarlist) {
                              element.classList.remove('moveoutnav')
                              navbarlist.classList.remove('widthgrow')
                              element.classList.add('moveinnav')
                              navbarlist.classList.add('widthshrink')
                        }
                  }
            };

            window.addEventListener('scroll', handleScroll);

            return () => {
                  window.removeEventListener('scroll', handleScroll);
            };
      }, []);



      useEffect(() => {
            const element = document.getElementById('navcontainer');
            const navbar = document.getElementById('navbar');

            const timer = global.setTimeout(() => {
                  if (navbar && element) {
                        navbar.classList.add('animationroot')
                        element.classList.add('animationnav')
                        element.classList.add('visible')
                        element.classList.add('widthnav')
                  }
            }, 50);

            return () => global.clearTimeout(timer);
      }, []);



      return (


            <div className='nav-container' id='navcontainer'>
                  <div className='NavigationMenuRoot' id='navbar'>
                        <div className='NavigationMenuList' id='navbarlist'>
                              <div className=" nav nav-pills flex flex-row w-[90%] gap-3 flex flex-shrink-1 flex-nowrap">
                                    <div className="nav-item bg-[#0f1398] rounded-[10px] w-full gap-3  flex flex-row justify-center items-center dropdown ">
                                          <a className={`nav-link  bg-transparent ${activeKey === '3' ? 'active shadow-blue-400' : 'active'} dropdown-toggle `} data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Home</a>
                                          <div className='dropdown-menu bg-transparent border-0'>
                                                <div className=" w-full h-full rounded-[10px] p-1 flex flex-col justify-center items-start bg-[#0f1398]" >
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className=" nav_drop no-underline w-full" href="/Home?index=1" shallow>About Plastics</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Home?index=2" shallow={true}>Plastic Waste</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Home?index=3" shallow={true}>Life of plastics</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Home?index=4" shallow={true}>Global Top Plastic Producers</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Home?index=5" shallow={true}>COVID-19 & Plastic</Link></div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="nav-item   bg-[#0f1398] rounded-[10px] w-full flex flex-row justify-center items-center  ">
                                          <a className={` bg-transparent nav-link text-nowrap ${activeKey === '2' ? 'active shadow-blue-400' : 'active'}`} href="#"> Plastic threat</a>
                                    </div>

                                    <div className="nav-item bg-[#0f1398] rounded-[10px] w-full gap-3  flex flex-row justify-center items-center dropdown ">
                                          <a className={`nav-link  bg-transparent ${activeKey === '3' ? 'active shadow-blue-400' : 'active'} dropdown-toggle `} data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Facts &amp; Figures</a>
                                          <div className='dropdown-menu bg-transparent border-0'>
                                                <div className=" w-full h-full rounded-[10px] p-1 flex flex-col justify-center items-start bg-[#0f1398]" >
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className=" nav_drop no-underline w-full" href="/Home?index=1" shallow>Global plastic waste generation</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Home?index=2" shallow={true}>Plastic in Bangladesh Statistics</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Home?index=3" shallow={true}>Plastic Industries &amp; Revenue (Industrial Impact)</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Home?index=4" shallow={true}>Plastic Industry &amp; Pollution</Link></div>


                                                </div>
                                          </div>
                                    </div>
                                    <div className="nav-item w-full  bg-[#0f1398] rounded-[10px]  flex flex-row justify-center items-center  ">
                                          <a className={` text-nowrap bg-transparent nav-link ${activeKey === '4' ? 'active shadow-blue-400' : 'active'}`} href="#">Reduce, Reuse, Recycle (3R)</a>
                                    </div>
                                    <div className="nav-item  w-full bg-[#0f1398] rounded-[10px]  flex flex-row justify-center items-center ">
                                          <a className={`text-nowrap nav-link bg-transparent ${activeKey === '5' ? 'active shadow-blue-400' : 'active'}`} href="#">Kids’ Corner</a>
                                    </div>
                                    <div className="nav-item w-full bg-[#0f1398] rounded-[10px]  flex flex-row justify-center items-center ">
                                          <a className={`nav-link bg-transparent ${activeKey === '6' ? 'active shadow-blue-400' : 'active'}`} href="#">Media</a>
                                    </div>
                                    <li className="nav-item w-full bg-[#0f1398] rounded-[10px]  flex flex-row justify-center items-center  ">
                                          <a className={`nav-link bg-transparent ${activeKey === '7' ? 'active shadow-blue-400' : 'active'}`} href="#">FAQs</a>
                                    </li>


                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default NavTab;