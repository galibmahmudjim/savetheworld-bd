"use client";
import { useEffect, useState } from 'react';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { GrFormNextLink } from "react-icons/gr";
import HomeMain from './HomeMain';



const Main: React.FC = () => {

      const [index, setIndex] = useState(0);

      return (
            <div className="w-full h-screen flex flex-col justify-start items-center">

                  <Carousel className='w-full h-full  flex flex-col justify-start items-center pl-[2%] pr-[1.5%]'
                        swipe={true}
                        animation="slide"
                        indicators={false}
                        interval={15000}
                        index={0}
                        navButtonsProps={{
                              style: {
                                    backgroundColor: 'black',
                                    borderRadius: 100,
                                    width: '70px',
                                    height: '70px',
                                    zIndex: 1000,
                              }
                        }}
                        navButtonsWrapperProps={{
                              style: {
                                    bottom: '0',
                                    top: 'unset',
                                    marginLeft: '5%',
                                    marginRight: '5%',

                                    position: 'absolute',
                              }
                        }}
                  >
                        <div className="w-full  h-[80vh] flex flex-col justify-start items-center ">
                              <HomeMain />
                        </div>





                  </Carousel ></div>
      );
};

export default Main;



