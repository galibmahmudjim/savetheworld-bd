import React, { useEffect, useState, PureComponent } from "react";
import "../../styles/HomeFigure.css";
import "../globals.css";

import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';
const data = [
      {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
      },
      {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
      },
      {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
      },
      {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
      },
      {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
      },
      {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
      },
      {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
      },
];

const HomeFigure = () => {
      const [isVisible, setIsVisible] = useState(false);

      useEffect(() => {
            const timer = setTimeout(() => {
                  setIsVisible(true);
            }, 1000);

            return () => clearTimeout(timer);
      }, []);

      return (
            <>

                  <div className="HomeFigure">
                        <div className=" box-container">
                              <div className=" left">Left Box</div>
                              <div className=" right pointer" >
                                    <ResponsiveContainer width="100%" height="90%" className={`transition-container  custom-cursor ${isVisible ? 'visible' : ''}`}
                                    >
                                          <LineChart
                                                className="custom-cursor-chart"
                                                width={500}
                                                height={250}
                                                data={data}
                                                margin={{
                                                      top: 5,
                                                      right: 30,
                                                      left: 20,
                                                      bottom: 5,
                                                }}
                                          >
                                                <XAxis dataKey="name" strokeWidth={3} />

                                                <YAxis strokeWidth={3} />

                                                <Legend />
                                                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={5} activeDot={{ r: 5 }} animationBegin={0} />
                                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={5} />
                                          </LineChart>
                                    </ResponsiveContainer>
                              </div>
                        </div>
                  </div >

            </>
      );
}

export default HomeFigure;