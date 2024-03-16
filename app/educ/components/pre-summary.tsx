import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import '../css/testscores.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import Link from 'next/link';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip

);

const CustomBarChart = () => {
  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string[];
    }[];
  }>({
    labels: [],
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});
  const [verdict, setVerdict] = useState('');
  const [totalGrade, setTotalGrade] = useState(0);

  useEffect(() => {
    const grades = [32, 31, 15, 90];
    const total = grades.reduce((acc, curr) => acc + curr, 0);
    const adjustedTotal = total > 100 ? 100 : total;

    // Calculate total grade percentage
    const percentage = (adjustedTotal / 100) * 100;

    // Function to categorize grades and assign colors
    const categorizeGrade = (grade: number) => {
      if (grade >= 0 && grade <= 19) return '#FF0000';
      else if (grade >= 20 && grade <= 39) return '#0FEAFF';
      else if (grade >= 40 && grade <= 59) return '#BDBD00';
      else if (grade >= 60 && grade <= 79) return '#20683C';
      else return '#00689C';
    };

    // Determine verdict based on total grade
    if (adjustedTotal >= 41 && adjustedTotal <= 74) {
      setVerdict('Need Improvement');
    } else if (adjustedTotal >= 75 && adjustedTotal <= 100) {
      setVerdict('Pass');
    } else {
      setVerdict('Failed');
    }

    setTotalGrade(percentage);

    setChartData({
      labels: ['PN', 'PB', 'PT', 'PU', 'Kabuuan'],
      datasets: [
        {
          label: 'Grades',
          data: [...grades, adjustedTotal],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: grades.map(grade => categorizeGrade(grade)) as string[],
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Test-Summary',
        },
      },
      scales: {
        y: {
          suggestedMin: 0,
          suggestedMax: 100,
          stepSize: 20,
        },
      },
      maintainAspectRatio: false,
      responsive: true,
      elements: {
        bar: {
          borderRadius: {
            topLeft: 15, // Set top-left border radius
            topRight: 15, // Set top-right border radius
          },
        },
      },
    });
  }, []);

  return (
    <div className='relative custom-font'>
        
        <div className='responsive info'>
  <div>
    <a style={{ fontSize: '26px' }}><b>Pangalan:</b> Jane Doe</a>
    <a style={{ marginLeft: '45px', fontSize: '26px' }}><b>Edad:</b> 78</a>
  </div>
  <a style={{ fontSize: '26px' }}><b>Baitang:</b> 1</a>
  <h2 className="text-left mt-4" style={{ fontSize: '45px' }}>Pre Test Summary</h2>
</div>

<div className='verdict' style={{ position: 'absolute', top: '20px', right: '20px' }}>
   <p style={{ fontSize: '70px', color: verdict === 'Need Improvement' ? 'yellow' : (verdict === 'Pass' ? 'green' : 'red') }}>{verdict} {totalGrade}%</p>
</div>

     <div className='w-[80] md:col-span-1 lg:h-[40vh] h-[20vh]  p-2 '>
        <Bar data={chartData} options={chartOptions} />
      </div>
      <br/>
      <div className=" flex justify-center bottom-0 w-full pb-4 ">
  <div className="text-center mr-4">
    <div className="box bg-red-500 rounded-lg p-2"></div>
    <span>Beginning</span>
  </div>
  <div className="text-center mr-4">
    <div className="box bg-blue-500 rounded-lg p-2"></div>
    <span>Developing</span>
  </div>
  <div className="text-center mr-4">
    <div className="box bg-yellow-500 rounded-lg p-2"></div>
    <span>Approaching</span>
  </div>
  <div className="text-center mr-4">
    <div className="box bg-green-500 rounded-lg p-2"></div>
    <span>Proficient</span>
  </div>
  <div className="text-center">
    <div className="box bg-purple-500 rounded-lg p-2"></div>
    <span>Advanced</span>
  </div>
</div>
<br/>
<div style={{ textAlign: 'center', marginBottom: '25px' }}>
  <Link href='' className='dlbutton'>
  Download Summary
  </Link>
</div>

</div>

   
  );
};

export default CustomBarChart;