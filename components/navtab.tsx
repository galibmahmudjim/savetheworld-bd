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
                              <ul className=" nav nav-pills">
                                    <li className="nav-item dropdown">
                                          <a className={`nav-link ${activeKey === '3' ? 'active shadow-blue-400' : 'active'} dropdown-toggle `} data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Home</a>
                                          <ul className="dropdown-menu bg-[#d7ebff94]" >
                                                <li><Link className="dropdown-item" href="/Home?index=1" shallow>About Plastics</Link></li>
                                                <li><Link className="dropdown-item" href="/Home?index=2" shallow={true}>Plastic comprises</Link></li>
                                                <li><Link className="dropdown-item" href="/Home?index=3" shallow={true}>Life of plastics</Link></li>
                                                <li><Link className="dropdown-item" href="/Home?index=4" shallow={true}>Global Top Plastic Producers</Link></li>
                                                <li><Link className="dropdown-item" href="/Home?index=5" shallow={true}>COVID-19 & Plastic</Link></li>
                                          </ul>
                                    </li>
                                    {/* <li className="nav-item">
                                          <Link href="/Home"
                                          ><div className={`nav-link ${activeKey === '1' ? 'active selectedActive shadow-xl' : 'active'}`} aria-current="page" >Home</div></Link>
                                    </li> */}
                                    <li className="nav-item">
                                          <a className={`nav-link ${activeKey === '2' ? 'active shadow-blue-400' : 'active'}`} href="#"> Plastic threat</a>
                                    </li>

                                    <li className="nav-item dropdown">
                                          <a className={`nav-link ${activeKey === '3' ? 'active shadow-blue-400' : 'active'} dropdown-toggle `} data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Global plastic waste generation</a>
                                          <ul className="dropdown-menu bg-[#d7ebff94]" >
                                                <li><a className="dropdown-item" href="#">Global plastic waste generation</a></li>
                                                <li><a className="dropdown-item" href="#">Plastic in Bangladesh Statistics</a></li>
                                                <li><a className="dropdown-item" href="#">Plastic Industries &amp; Revenue (Industrial Impact)</a></li>
                                                <li><a className="dropdown-item" href="#">Plastic Industry &amp; Pollution:</a></li>
                                          </ul>
                                    </li>
                                    <li className="nav-item">
                                          <a className={`nav-link ${activeKey === '4' ? 'active shadow-blue-400' : 'active'}`} href="#">Reduce, Reuse, Recycle (3R)</a>
                                    </li>
                                    <li className="nav-item">
                                          <a className={`nav-link ${activeKey === '5' ? 'active shadow-blue-400' : 'active'}`} href="#">Kids’ Corner</a>
                                    </li>
                                    <li className="nav-item">
                                          <a className={`nav-link ${activeKey === '6' ? 'active shadow-blue-400' : 'active'}`} href="#">Media</a>
                                    </li>
                                    <li className="nav-item">
                                          <a className={`nav-link ${activeKey === '7' ? 'active shadow-blue-400' : 'active'}`} href="#">FAQs</a>
                                    </li>


                              </ul>
                        </div>
                  </div>
            </div>
      );
}

export default NavTab;