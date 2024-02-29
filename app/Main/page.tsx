"use client";
import { useEffect, useState } from 'react';
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import { GrFormNextLink } from "react-icons/gr";
import HomeDetails from './(components)/HomeDetails'


const Main: React.FC = () => {

      const [index, setIndex] = useState(0);

      const handleChange = () => {
            setIndex((prevIndex) => (prevIndex + 1) % 2);
      }

      return (
            <Carousel className=''
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
            >

                  <div className="w-full flex flex-col justify-center items-center ">
                        <HomeDetails />
                  </div>
            </Carousel >
      );
};

export default Main;



