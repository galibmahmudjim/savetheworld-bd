"use client";
import { useEffect, useState } from 'react';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { GrFormNextLink } from "react-icons/gr";
import HomeDetails from './(components)/HomeDetails'
import HomeMain from './(components)/HomeMain';
import Main2 from './(components)/Main2';
import Main3 from './(components)/Main3';
import Main4 from './(components)/Main4';
import Main5 from './(components)/Main5';
import Main6 from './(components)/Main6';
import Main7 from './(components)/Main7';


const Main: React.FC = () => {

      const [index, setIndex] = useState(0);


      return (


            <Carousel className='w-full min-h-screen flex flex-col justify-start items-center'
                  swipe={true}
                  animation="slide"
                  indicators={false}
                  interval={15000}
                  index={index}
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
            > {/* <div className="w-full min-h-[75vh] flex flex-col  justify-center items-center " >
                        <HomeDetails />
                  </div > */}
                  <div className="w-full  min-h-screen flex flex-col justify-center items-center ">
                        <HomeMain />
                  </div>

                  <div className="w-full min-h-screen flex flex-col  justify-center items-center " >
                        <Main2 />
                  </div >
                  <div className="w-full min-h-screen flex flex-col  justify-center items-center " >
                        <Main3 />
                  </div >
                  <div className="w-full min-h-screen flex flex-col  justify-center items-center " >
                        <Main4 />
                  </div >
                  <div className="w-full min-h-screen flex flex-col  justify-center items-center " >
                        <Main5 />
                  </div >
                  <div className="w-full min-h-screen flex flex-col  justify-center items-center " >
                        <Main6 />
                  </div >
                  <div className="w-full min-h-screen flex flex-col  justify-center items-center " >
                        <Main6 />
                  </div >
                  <div className="w-full min-h-screen flex flex-col  justify-center items-center " >
                        <Main7 />
                  </div >

            </Carousel >
      );
};

export default Main;



