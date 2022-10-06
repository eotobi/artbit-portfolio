import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./skillschart.scss"

const data = [
    {
      name: 'Python',
      skills: 90,
    },
    {
      name: 'Mobile Apps',
      skills: 90,
    },
    {
      name: 'Java',
      skills: 60,
    },
    {
      name: 'React js',
      skills: 90,
    },
    {
      name: 'Python Django',
      skills: 80,
    },
    {
      name: 'Web Apps',
      skills: 90,
    },  
  ];
const SkillsChart = () => {
  return (
    <div className='chart-area'>
      <ResponsiveContainer width={700} height={240}>
        <BarChart
          width={700}
          height={240}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis fontSize={8} dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Bar dataKey="skills" fill="#82ca9d" />
        </BarChart>

      </ResponsiveContainer>  
    </div>
  )
}

export default SkillsChart