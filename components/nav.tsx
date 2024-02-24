'use client';
import React, { HTMLAttributes, useEffect, useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import '../styles/navbar.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { setTimeout } from 'timers/promises';


const NavBar: React.FC = () => {
      const [children, setChildren] = useState(null);
      const [current, setCurrent] = useState('/');
      const currentPath = usePathname();

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
            const navbarlist = document.getElementById('navbarlist');

            const timer = global.setTimeout(() => {
                  if (navbar && element && navbarlist) {
                        navbar.classList.add('animationroot')
                        element.classList.add('animationnav')
                        element.classList.add('widthnav')
                        navbarlist.classList.add('widthnav')
                        element.classList.add('visible')
                  }
            }, 100);

            return () => global.clearTimeout(timer);
      }, []);



      return (
            <div id='navcontainer' className="nav-container ">
                  <NavigationMenu.Root className=" NavigationMenuRoot " id='navbar'>
                        <NavigationMenu.List className="NavigationMenuList " id='navbarlist'>
                              <NavigationMenu.Item>
                                    <Link className="NavigationMenuLink" href="/">
                                          Home
                                    </Link>

                              </NavigationMenu.Item>
                              <NavigationMenu.Item>
                                    <Link className="NavigationMenuLink" href="/about">
                                          Global Impact
                                    </Link>

                              </NavigationMenu.Item>

                              <NavigationMenu.Item>
                                    <Link className="NavigationMenuLink" href="/">
                                          Interactive Map
                                    </Link>
                              </NavigationMenu.Item>
                              <NavigationMenu.Item>
                                    <Link className="NavigationMenuLink" href="/">
                                          News ans Update
                                    </Link>
                              </NavigationMenu.Item>

                              <NavigationMenu.Item>
                                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                                          Plastic Waste <CaretDownIcon className="CaretDown" aria-hidden />
                                    </NavigationMenu.Trigger>
                                    <NavigationMenu.Content className="NavigationMenuContent">
                                          <ul className="List ">
                                                <ListItem title="Global" isActive={true} href="/"  >
                                                </ListItem>
                                                <ListItem title="Bangladesh" isActive={true} href="/"  >
                                                </ListItem>
                                          </ul>
                                    </NavigationMenu.Content>
                              </NavigationMenu.Item>

                              <NavigationMenu.Item>
                                    <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
                                          FAQ
                                    </NavigationMenu.Link>
                              </NavigationMenu.Item>

                              <NavigationMenu.Indicator className="NavigationMenuIndicator">
                                    <div className="Arrow" />
                              </NavigationMenu.Indicator>
                        </NavigationMenu.List>

                        <div className="ViewportPosition">
                              <NavigationMenu.Viewport className="NavigationMenuViewport" />
                        </div>
                  </NavigationMenu.Root>
            </div>
      );
};

interface ListItemProps extends HTMLAttributes<HTMLAnchorElement> {
      className?: string;
      title: string;
      isActive?: boolean;
      href: string;
}

const ListItem: React.ForwardRefRenderFunction<HTMLAnchorElement, ListItemProps> = ({ className, title, isActive, href, ...props }) => (
      <li>
            <NavigationMenu.Link asChild>
                  <Link className={isActive ? 'ListItemLinkActive' : 'ListItemLink'} {...props} href='/about'  >
                        <div className="ListItemHeading">{title}</div>
                  </Link>
            </NavigationMenu.Link>
      </li>
);
export default NavBar;