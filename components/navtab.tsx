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
                  const navbarround = document.getElementById('navbarround');
                  if (navbar && element) {
                        navbar.classList.remove('animationroot')
                        element.classList.remove('animationnav')
                  }
                  if (window.scrollY === 0) {
                        if (element && navbar && navbarlist && navbarround) {

                              navbarlist.classList.remove('widthshrink')
                              element.classList.remove('moveinnav')
                              element.classList.add('moveoutnav')
                              navbarlist.classList.add('widthgrow')
                              navbarround.classList.remove('rounded-[10px]')

                        }
                  } else {
                        if (element && navbar && navbarlist && navbarround) {
                              element.classList.remove('moveoutnav')
                              navbarlist.classList.remove('widthgrow')
                              element.classList.add('moveinnav')
                              navbarround.classList.add('rounded-[10px]')
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


            <div className='nav-container ' id='navcontainer'>
                  <div className='NavigationMenuRoot' id='navbar'>
                        <div className='NavigationMenuList' id='navbarlist'>
                              <div id='navbarround' className=" nav nav-pills flex flex-row w-full bg-[#23336A] h-[50px] gap-0 flex flex-shrink-1 flex-nowrap mx-[6vw]">
                                    <div className="nav-item  rounded-[10px] border-r-2  border-white rounded-r-none w-full gap-3  flex flex-row justify-center items-center dropdown ">
                                          <a className={`nav-link bg-transparent  active dropdown-toggle `} data-bs-toggle="dropdown" href="/Home" role="button" aria-expanded="false">Home</a>
                                          <div className='dropdown-menu bg-transparent border-0'>
                                                <div className="bg-[#23336A] pt-[7%] w-full h-full rounded-[10px] p-1 flex flex-col justify-center items-start " >
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className=" nav_drop no-underline w-full" href="/Home?index=1" shallow>About Plastics</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Home?index=2" shallow={true}>Plastic Waste</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Home?index=3" shallow={true}>Life of plastics</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Home?index=4" shallow={true}>Global Top Plastic Producers</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Home?index=5" shallow={true}>COVID-19 & Plastic</Link></div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="nav-item  rounded-[10px] border-r-2  border-white rounded-r-none w-full gap-3  flex flex-row justify-center items-center dropdown ">
                                          <a className={`nav-link bg-transparent  active dropdown-toggle `} data-bs-toggle="dropdown" href="/Plastic-threat" role="button" aria-expanded="false">Plastic Threat</a>
                                          <div className='dropdown-menu bg-transparent border-0'>
                                                <div className="bg-[#23336A] pt-[7%] w-full h-full rounded-[10px] p-1 flex flex-col justify-center items-start " >
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className=" nav_drop no-underline w-full" href="/Plastic-threat?index=1" shallow>Effect on Environment</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Plastic-threat?index=2" shallow={true}>Air Pollution</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Plastic-threat?index=3" shallow={true}>Soil Pollution</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Plastic-threat?index=4" shallow={true}>Marine Pollution</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Plastic-threat?index=5" shallow={true}>Human Health</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Plastic-threat?index=6" shallow={true}>Climate Change</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Plastic-threat?index=7" shallow={true}>Social Impact</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Plastic-threat?index=8" shallow={true}>Economic Burden</Link></div>
                                                </div>
                                          </div>
                                    </div>

                                    <div className="nav-item border-r-2 w-full gap-3  flex flex-row justify-center items-center dropdown ">
                                          <a className={`nav-link  bg-transparent active dropdown-toggle `} data-bs-toggle="dropdown" href="/Facts&Figs" role="button" aria-expanded="false">Facts &amp; Figures</a>
                                          <div className='dropdown-menu bg-transparent border-0'>
                                                <div className="bg-[#23336A] pt-[7%] w-full h-full rounded-[10px] p-1 flex flex-col justify-center items-start " >
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className=" nav_drop no-underline w-full" href="/Facts&Figs?index=1" shallow>Global plastic waste generation</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Facts&Figs?index=2" shallow={true}>Plastic in Bangladesh Statistics</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Facts&Figs?index=3" shallow={true}>Plastic Industries &amp; Revenue (Industrial Impact)</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/Facts&Figs?index=4" shallow={true}>Plastic Industry &amp; Pollution</Link></div>


                                                </div>
                                          </div>
                                    </div>
                                    <div className="nav-item border-r-2 w-full gap-3  flex flex-row justify-center items-center dropdown ">
                                          <a className={`nav-link  bg-transparent active dropdown-toggle `} data-bs-toggle="dropdown" href="/3R" role="button" aria-expanded="false">3R</a>
                                          <div className='dropdown-menu bg-transparent border-0'>
                                                <div className="bg-[#23336A] pt-[7%] w-full h-full rounded-[10px] p-1 flex flex-col justify-center items-start " >
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className=" nav_drop no-underline w-full" href="/3R?index=1" shallow>Reduce</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/3R?index=2" shallow={true}>Countries banned plastic</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/3R?index=3" shallow={true}>Reuse & Recycle</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/3R?index=4" shallow={true}>Plastic Alternatives</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/3R?index=5" shallow={true}>Bangladesh 3R perspectives</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/3R?index=6" shallow={true}>Solutions to tackle plastic waste</Link></div>

                                                </div>
                                          </div>
                                    </div>
                                    <div className="nav-item  w-full  border-r-2 flex flex-row justify-center items-center ">
                                          <a className={`text-nowrap nav-link bg-transparent active`} href="/Kidscorner">Kids’ Corner</a>
                                    </div>
                                    <div className="nav-item w-full  border-r-2 flex flex-row justify-center items-center ">
                                          <a className={`nav-link bg-transparent active`} href="#">Media</a>
                                    </div>
                                    <div className="nav-item border-r-2 w-full gap-3  flex flex-row justify-center items-center dropdown ">
                                          <a className={`nav-link  bg-transparent active dropdown-toggle `} data-bs-toggle="dropdown" href="/FAQ" role="button" aria-expanded="false">FAQ</a>
                                          <div className='dropdown-menu bg-transparent border-0'>
                                                <div className="bg-[#23336A] pt-[7%] w-full h-full rounded-[10px] p-1 flex flex-col justify-center items-start " >
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className=" nav_drop no-underline w-full" href="/FAQ?index=1" shallow>Who we are?</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/FAQ?index=2" shallow={true}>Our Missions</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/FAQ?index=3" shallow={true}>Want to join us? </Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/FAQ?index=4" shallow={true}>Upcoming Events</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/FAQ?index=5" shallow={true}>Want to be a part of the survey?</Link></div>
                                                      <div className='dropdown-item bg-transparent hover:scale-105'><Link className="nav_drop no-underline" href="/FAQ?index=6" shallow={true}>Willing to pay/ donate to save the earth?</Link></div>

                                                </div>
                                          </div>
                                    </div>


                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default NavTab;