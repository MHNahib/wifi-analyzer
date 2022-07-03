import "../App.css"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useEffect, useState } from "react";




const ChartComponent = () => {
 
  const [data, setData]= useState([])
  
  const apiCall = () =>{
    fetch("http://localhost:5000/wifi")
    .then((response) => response.json())
    .then((data) => {
   
      setData(data.networks)
    });
  }

  useEffect(() => {
 
   apiCall()
  }, []);

  setTimeout(() => {
  
    apiCall()
  }, 10000);

  return <div className="chart-container">

    <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="ssid" allowDataOverflow={false}/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="signal_level" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="channel" stroke="#82ca9d" activeDot={{ r: 8 }} />
      
        </LineChart>
      </ResponsiveContainer>
  </div>

};

export default ChartComponent;
