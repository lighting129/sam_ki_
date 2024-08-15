import React from 'react';
import { Bar } from 'react-chartjs-2';
import * as XLSX from 'xlsx';
import './report.css';

const Report = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/path-to-your-excel-file/Amazon 2_Raw.xlsx')
      .then(res => res.arrayBuffer())
      .then(buffer => {
        const workbook = XLSX.read(buffer, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        setData(jsonData);
      });
  }, []);

  const chartData = {
    labels: data ? data.map(item => item['Product Name']) : [],
    datasets: [
      {
        label: 'Sales',
        data: data ? data.map(item => item['Sales']) : [],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="report-container">
      <Bar data={chartData} />
    </div>
  );
};

export default Report;
