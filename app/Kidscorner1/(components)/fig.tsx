import React, { useEffect, useState, PureComponent } from "react";
import "../../styles/HomeFigure.css";
import "../globals.css";

import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle, Label } from 'recharts';
const data = [
      { 'Year': 1950, 'Name': 'World', 'plastic_production': 2000000 },
      { 'Year': 1951, 'Name': 'World', 'plastic_production': 2000000 },
      // { 'Year': 1952, 'Name': 'World', 'plastic_production': 2000000 },
      // { 'Year': 1953, 'Name': 'World', 'plastic_production': 3000000 },
      // { 'Year': 1954, 'Name': 'World', 'plastic_production': 3000000 },
      // { 'Year': 1955, 'Name': 'World', 'plastic_production': 4000000 },
      // { 'Year': 1956, 'Name': 'World', 'plastic_production': 5000000 },
      // { 'Year': 1957, 'Name': 'World', 'plastic_production': 5000000 },
      { 'Year': 1958, 'Name': 'World', 'plastic_production': 6000000 },
      { 'Year': 1959, 'Name': 'World', 'plastic_production': 7000000 },
      { 'Year': 1960, 'Name': 'World', 'plastic_production': 8000000 },
      { 'Year': 1961, 'Name': 'World', 'plastic_production': 9000000 },
      { 'Year': 1962, 'Name': 'World', 'plastic_production': 11000000 },
      // { 'Year': 1963, 'Name': 'World', 'plastic_production': 13000000 },
      // { 'Year': 1964, 'Name': 'World', 'plastic_production': 15000000 },
      // { 'Year': 1965, 'Name': 'World', 'plastic_production': 17000000 },
      { 'Year': 1966, 'Name': 'World', 'plastic_production': 20000000 },
      { 'Year': 1967, 'Name': 'World', 'plastic_production': 23000000 },
      // { 'Year': 1968, 'Name': 'World', 'plastic_production': 27000000 },
      // { 'Year': 1969, 'Name': 'World', 'plastic_production': 32000000 },
      // { 'Year': 1970, 'Name': 'World', 'plastic_production': 35000000 },
      // { 'Year': 1971, 'Name': 'World', 'plastic_production': 38000000 },
      // { 'Year': 1972, 'Name': 'World', 'plastic_production': 44000000 },
      // { 'Year': 1973, 'Name': 'World', 'plastic_production': 51000000 },
      // { 'Year': 1975, 'Name': 'World', 'plastic_production': 46000000 },
      // { 'Year': 1976, 'Name': 'World', 'plastic_production': 54000000 },
      // { 'Year': 1977, 'Name': 'World', 'plastic_production': 59000000 },
      // { 'Year': 1978, 'Name': 'World', 'plastic_production': 64000000 },
      // { 'Year': 1979, 'Name': 'World', 'plastic_production': 71000000 },
      // { 'Year': 1980, 'Name': 'World', 'plastic_production': 70000000 },
      // { 'Year': 1981, 'Name': 'World', 'plastic_production': 72000000 },
      // { 'Year': 1982, 'Name': 'World', 'plastic_production': 73000000 },
      // { 'Year': 1983, 'Name': 'World', 'plastic_production': 80000000 },
      // { 'Year': 1984, 'Name': 'World', 'plastic_production': 86000000 },
      { 'Year': 1985, 'Name': 'World', 'plastic_production': 90000000 },
      { 'Year': 1986, 'Name': 'World', 'plastic_production': 96000000 },
      { 'Year': 1987, 'Name': 'World', 'plastic_production': 104000000 },
      { 'Year': 1988, 'Name': 'World', 'plastic_production': 110000000 },
      { 'Year': 1989, 'Name': 'World', 'plastic_production': 114000000 },
      { 'Year': 1990, 'Name': 'World', 'plastic_production': 120000000 },
      { 'Year': 1991, 'Name': 'World', 'plastic_production': 124000000 },
      { 'Year': 1992, 'Name': 'World', 'plastic_production': 132000000 },
      { 'Year': 1993, 'Name': 'World', 'plastic_production': 137000000 },
      // { 'Year': 1994, 'Name': 'World', 'plastic_production': 151000000 },
      // { 'Year': 1995, 'Name': 'World', 'plastic_production': 156000000 },
      // { 'Year': 1996, 'Name': 'World', 'plastic_production': 168000000 },
      // { 'Year': 1997, 'Name': 'World', 'plastic_production': 180000000 },
      // { 'Year': 1998, 'Name': 'World', 'plastic_production': 188000000 },
      // { 'Year': 1999, 'Name': 'World', 'plastic_production': 202000000 },
      // { 'Year': 2000, 'Name': 'World', 'plastic_production': 213000000 },
      // { 'Year': 2001, 'Name': 'World', 'plastic_production': 218000000 },
      { 'Year': 2002, 'Name': 'World', 'plastic_production': 231000000 },
      { 'Year': 2003, 'Name': 'World', 'plastic_production': 241000000 },
      { 'Year': 2004, 'Name': 'World', 'plastic_production': 256000000 },
      { 'Year': 2005, 'Name': 'World', 'plastic_production': 263000000 },
      { 'Year': 2006, 'Name': 'World', 'plastic_production': 280000000 },
      // { 'Year': 2007, 'Name': 'World', 'plastic_production': 295000000 },
      // { 'Year': 2008, 'Name': 'World', 'plastic_production': 281000000 },
      // { 'Year': 2009, 'Name': 'World', 'plastic_production': 288000000 },
      { 'Year': 2010, 'Name': 'World', 'plastic_production': 313000000 },
      { 'Year': 2011, 'Name': 'World', 'plastic_production': 325000000 },
      { 'Year': 2012, 'Name': 'World', 'plastic_production': 338000000 },
      { 'Year': 2013, 'Name': 'World', 'plastic_production': 352000000 },
      { 'Year': 2014, 'Name': 'World', 'plastic_production': 367000000 },
      // { 'Year': 2015, 'Name': 'World', 'plastic_production': 381000000 },
      // { 'Year': 2016, 'Name': 'World', 'plastic_production': 400050000 },
      // { 'Year': 2017, 'Name': 'World', 'plastic_production': 420052500 },
      // { 'Year': 2018, 'Name': 'World', 'plastic_production': 441055140 },
      // { 'Year': 2019, 'Name': 'World', 'plastic_production': 459746020 }
];

const CustomizedAxisTick: React.FC<any> = (props) => {
      const { x, y, payload } = props;
      const valueInMillions = payload.value / 1000000; // Convert the value to millions

      return (
            <text x={x} y={y} dy={16} fill="#8884d8" transform="rotate(45)" fontSize={10} textAnchor="start">
                  {`${valueInMillions}M`} {/* Display the value in millions with 'M' */}
            </text>
      );
};
const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
            const valueInMillions = (payload[0].value / 1000000).toFixed(2); // Convert and round to two decimal places

            return (
                  <div style={{ border: '1px solid #ccc', padding: '10px' }} className="flex flex-col bg-purple-500 justify-start items-start">
                        <p>{`Year: ${label}`}</p>
                        <p>{`Production: ${valueInMillions}M Ton`}</p>
                  </div>
            );
      }

      return null;
};



const HomeFigure = () => {

      const [isVisible, setIsVisible] = useState(false);
      const [clickedGraph, setClickedGraph] = useState(0);
      const [leftGrow, setLeftGrow] = useState(0);
      useEffect(() => {
            const timer = setTimeout(() => {
                  setIsVisible(true);
            }, 1000);

            return () => clearTimeout(timer);
      }, []);

      useEffect(() => {
            const leftelement = document.getElementById("leftFigHome")!;
            const rightelement = document.getElementById("RightFigHome")!;
            if (clickedGraph === 2) {
                  if (leftelement) {
                        // leftelement.classList.remove("left");
                        leftelement.classList.add("leftshrink");
                        leftelement.classList.remove("leftgrow");
                  }
            } else if (clickedGraph === 1) {
                  if (leftelement) {
                        leftelement.classList.add("leftgrow");
                        leftelement.classList.remove("leftshrink");
                  }
            }
      }
            , [clickedGraph]);

      useEffect(() => {
            const rightelement = document.getElementById("RightFigHome")!;
            if (leftGrow === 2) {
                  if (rightelement) {
                        rightelement.classList.add("rightgrow");
                        rightelement.classList.remove("rightshrink");
                  }
            } else if (leftGrow === 1) {
                  if (rightelement) {
                        rightelement.classList.add("rightshrink");
                        rightelement.classList.remove("rightgrow");
                  }
            }
      }
            , [leftGrow]);


      return (
            <>

                  <div className="HomeFigure">
                        <div className=" box-container">
                              <div id="leftFigHome" className='left' onClick={() => {
                                    if (leftGrow === 2 || leftGrow === 0) {
                                          setLeftGrow(1);
                                    }
                                    else if (leftGrow === 1) {
                                          setLeftGrow(2);
                                    }

                              }}>Left Box</div>
                              <div id="RightFigHome" className=" right pointer" >
                                    <ResponsiveContainer width="100%" height="90%" className={`transition-container  custom-cursor ${isVisible ? 'visible' : ''}`}
                                    >
                                          <LineChart
                                                className="custom-cursor-chart"
                                                onClick={() => {
                                                      if (clickedGraph === 1 || clickedGraph === 0) {
                                                            setClickedGraph(2);
                                                      }
                                                      else if (clickedGraph === 2) {
                                                            setClickedGraph(1);
                                                      }
                                                }}
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
                                                <XAxis dataKey="Year" strokeWidth={3} stroke="#CCD4CF" />

                                                <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(2)}M`} dataKey='plastic_production' domain={[2000000, 459746020]} strokeWidth={3} stroke="#CCD4CF" />
                                                <Label value="Monthly Plastic Production" offset={0} position="insideTop" />
                                                <Tooltip content={<CustomTooltip />} />
                                                <Legend />
                                                <Line type="monotone" dataKey="plastic_production" label="plastic_production(Ton)" stroke="#8884d8" strokeWidth={5} activeDot={{ r: 5 }} animationBegin={0} />
                                                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" strokeWidth={5} /> */}
                                          </LineChart>
                                    </ResponsiveContainer>
                              </div>
                        </div>
                  </div >

            </>
      );
}

export default HomeFigure;
