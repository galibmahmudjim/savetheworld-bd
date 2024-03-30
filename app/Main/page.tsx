"use client";
import { useEffect, useState } from 'react';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { GrFormNextLink } from "react-icons/gr";
import HomeDetails from './(components)/HomeDetails'
import ReactLoading from 'react-loading';
import HomeMain from './(components)/HomeMain';
import Main2 from './(components)/Main2';
import Main3 from './(components)/Main3';
import Main4 from './(components)/Main4';
import Main5 from './(components)/Main5';
import Main6 from './(components)/Main6';
import Main7 from './(components)/Main7';
import Main8 from './(components)/Main8';
import Main9 from './(components)/Main9';
import Main10 from './(components)/Main10';
import Main11 from './(components)/Main11';
import Main12 from './(components)/Main12';


const Main: React.FC = () => {

      const [index, setIndex] = useState(0);
      const components = [<HomeMain />, <Main2 />, <Main3 />, <Main4 />, <Main5 />, <Main6 />, <Main7 />, <Main8 />, <Main9 />, <Main10 />, <Main11 />, <Main12 />];
      const imageUrls = ["/path/to/image1.jpg", "/path/to/image2.jpg"]; // Array of image URLs
      const [allComponentsLoaded, setAllComponentsLoaded] = useState(false);

      useEffect(() => {
            // Simulate loading of components or content
            Promise.all([
                  // Simulate async loading, e.g., fetching data or waiting for images to load
                  new Promise((resolve) => setTimeout(resolve, 1000)), // Placeholder for actual loading logic
                  new Promise((resolve) => setTimeout(resolve, 1500)), // Adjust times based on your needs
                  // Add more promises for other components or content
            ]).then(() => {
                  setAllComponentsLoaded(true);
            });
      }, []);

      if (!allComponentsLoaded) {
            return (
                  <div className="w-full h-screen flex flex-col justify-center items-center">
                        <ReactLoading type={"cylon"} height={100} width={100} />
                  </div>
            );
      }
      return (
            <div className="w-[100vw] h-screen flex flex-col justify-start items-center pl-[6%] pr-[6%]">


                  <Carousel className='w-full h-full  flex flex-col justify-start items-center '
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

                                    position: 'absolute',
                              }
                        }}
                  >
                        {components.map((Component, index) => (

                              <div key={index} className=" w-full  h-[80vh]  flex flex-col justify-start items-center ">

                                    {components[index]}
                              </div>
                        ))}
                  </Carousel ></div >
      );
};

export default Main;



