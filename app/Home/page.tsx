"use client";
import React, { useEffect, useState, PureComponent } from "react";

import { LineChart, AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle, Label } from 'recharts';
import "./home.css";
import GlobalPlasticProduction from "./GlobalPlasticProduction";
const Home: React.FC = () => {

      return (
            <div className="w-full flex flex-col justify-center items-center">
                  <GlobalPlasticProduction />
            </div>
      );
};

export default Home;