"use client";
import React, { useEffect, useState, PureComponent, useCallback } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IoChevronBack } from "react-icons/io5";

import "./home.css";
import GlobalPlasticProduction from "./GlobalPlasticProduction";


import { Row, Col, Carousel } from 'antd'


const contentStyle: React.CSSProperties = {

      height: '160px',
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
};

interface ArrowProps {
      className?: string;
      style?: React.CSSProperties;
      onClick?: () => void;
}

const SampleNextArrow: React.FC<ArrowProps> = (props) => {
      const { className, style, onClick } = props;
      return (
            <RightOutlined className={className}
                  style={{
                        ...style,
                        color: 'black',
                        fontSize: '15px',
                        lineHeight: '1.5715',
                        right: '6%',
                        position: 'absolute',
                        zIndex: 1
                  }}
                  onClick={onClick}
            />
      );
};

const SamplePrevArrow: React.FC<ArrowProps> = (props) => {
      const { className, style, onClick } = props;
      return (

            <LeftOutlined
                  className={className}
                  style={{
                        ...style,
                        color: 'black',
                        fontSize: '15px',
                        lineHeight: '1.5715',
                        left: '8%',
                        position: 'absolute',
                        zIndex: 1

                  }}
                  onClick={onClick}
            />
      );
};

const settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
};


const Home: React.FC = () => {
      const [count, setCount] = useState(0);
      const [released, setReleased] = useState(true);

      const handleChildData = () => {
            setReleased(!released);
      };
      useEffect(() => {

      }
            , [released]);


      return (
            <Row justify="center">
                  <Col className="w-full"  >
                        <Carousel autoplay={true} autoplaySpeed={1500} dots={false} arrows {...settings} >
                              <div className="w-full flex flex-col justify-center items-center">
                                    <GlobalPlasticProduction onClick={handleChildData} />
                              </div>
                              <div className="w-full flex flex-col justify-center items-center">
                                    <GlobalPlasticProduction onClick={handleChildData} />
                              </div>

                        </Carousel>
                  </Col>
            </Row>
            // <Swiper
            //       spaceBetween={30}
            //       centeredSlides={true}

            //       autoplay={{
            //             delay: 2000,
            //             disableOnInteraction: true,
            //       }}
            //       pagination={{
            //             clickable: true,
            //       }}
            //       navigation={true}
            //       modules={[Autoplay, Pagination, Navigation]}
            //       className="mySwiper"
            // >
            //       <SwiperSlide>
            //             <div className="w-full flex flex-col justify-center items-center">
            //                   <GlobalPlasticProduction onClick={handleChildData} />
            //             </div>
            //       </SwiperSlide>
            //       <SwiperSlide>
            //             <div className="w-full flex flex-col justify-center items-center">
            //                   <GlobalPlasticProduction onClick={handleChildData} />
            //             </div>
            //       </SwiperSlide>
            // </Swiper>
      );
};

export default Home;