import React from 'react';
import { Bar, Line, Scatter, Pie, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './styles/Dashboard.css';

ChartJS.register(...registerables);

const randomData = (length, max) => Array.from({ length }, () => Math.floor(Math.random() * max));

const salesDistribution = [
    { name: "United States", coordinates: [37.0902, -95.7129], sales: Math.floor(Math.random() * 10000) },
    { name: "Brazil", coordinates: [-14.2350, -51.9253], sales: Math.floor(Math.random() * 10000) },
    { name: "Russia", coordinates: [61.5240, 105.3188], sales: Math.floor(Math.random() * 10000) },
    { name: "India", coordinates: [20.5937, 78.9629], sales: Math.floor(Math.random() * 10000) },
    { name: "China", coordinates: [35.8617, 104.1954], sales: Math.floor(Math.random() * 10000) },
    { name: "South Africa", coordinates: [-30.5595, 22.9375], sales: Math.floor(Math.random() * 10000) },
    { name: "Australia", coordinates: [-25.2744, 133.7751], sales: Math.floor(Math.random() * 10000) },
];

const Dashboard = () => {
    const barData = {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [
            {
                label: 'Sales',
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
                hoverBorderColor: 'rgba(75, 192, 192, 1)',
                data: randomData(4, 1000),
            },
        ],
    };

    const lineData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
            {
                label: 'Revenue',
                fill: false,
                backgroundColor: 'rgba(75, 192, 192, 0.4)',
                borderColor: 'rgba(75, 192, 192, 1)',
                data: randomData(8, 5000),
            },
        ],
    };

    const scatterData = {
        labels: ['Scatter'],
        datasets: [
            {
                label: 'Product Performance',
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                data: Array.from({ length: 10 }, () => ({
                    x: Math.floor(Math.random() * 100),
                    y: Math.floor(Math.random() * 100),
                })),
            },
        ],
    };

    const pieData = {
        labels: ['Product A', 'Product B', 'Product C', 'Product D'],
        datasets: [
            {
                label: 'Market Share',
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                data: randomData(4, 100),
            },
        ],
    };

    const doughnutData = {
        labels: ['Segment A', 'Segment B', 'Segment C', 'Segment D'],
        datasets: [
            {
                label: 'Customer Segments',
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                data: randomData(4, 100),
            },
        ],
    };

    return (
        <div className="dashboard container">
            <h2>Sales Analytics Dashboard</h2>
            <div className="chart-container">
                <h3>Quarterly Sales</h3>
                <Bar data={barData} />
            </div>
            <div className="chart-container">
                <h3>Monthly Revenue</h3>
                <Line data={lineData} />
            </div>
            <div className="chart-container">
                <h3>Product Performance</h3>
                <Scatter data={scatterData} />
            </div>
            <div className="chart-container">
                <h3>Market Share</h3>
                <Pie data={pieData} />
            </div>
            <div className="chart-container">
                <h3>Customer Segments</h3>
                <Doughnut data={doughnutData} />
            </div>
            <div className="chart-container map-container">
                <h3>Sales Distribution by Region</h3>
                <MapContainer center={[20, 0]} zoom={2} style={{ height: "500px", width: "100%" }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {salesDistribution.map(({ name, coordinates, sales }) => (
                        <CircleMarker
                            key={name}
                            center={coordinates}
                            radius={Math.log(sales + 1) * 2}
                            color="#F53"
                            fillColor="#F53"
                            fillOpacity={0.5}
                        >
                            <Popup>
                                <div>
                                    <strong>{name}</strong>
                                    <br />
                                    Sales: {sales}
                                </div>
                            </Popup>
                        </CircleMarker>
                    ))}
                </MapContainer>
            </div>
        </div>
    );
};

export default Dashboard;
