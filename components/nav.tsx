'use client';
import React, { HTMLAttributes, useState } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import '../styles/navbar.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const NavBar: React.FC = () => {
      const [children, setChildren] = useState(null);
      const [current, setCurrent] = useState('/');
      const currentPath = usePathname();

      const handleClick = (e: any) => {
            setCurrent(currentPath);
            console.log('click ', e);
            setCurrent(e.key);
      };

      // setTimeout(() => {
      //       if (typeof window !== 'undefined') {
      //             const element = document.getElementById('navbar');
      //             if (element) {
      //                   element.classList.add('flex');
      //             }
      //       }
      // }, 100);

      return (
            <div className="nav-container">
                  <NavigationMenu.Root className=" NavigationMenuRoot  " id='navbar'>
                        <NavigationMenu.List className="NavigationMenuList">
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