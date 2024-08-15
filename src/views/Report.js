import React, { useState } from 'react';
import jsPDF from 'jspdf';
import './styles/Report.css';

const Report = () => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');

    const generatePDF = () => {
        const doc = new jsPDF();
        doc.text(`Product Name: ${productName}`, 10, 10);
        doc.text(`Category: ${category}`, 10, 20);
        doc.save(`${productName}_report.pdf`);
    };

    return (
        <div className="report">
            <h2>Generate Report</h2>
            <div className="input-container">
                <label>Product Name:</label>
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                />
            </div>
            <div className="input-container">
                <label>Category:</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
            </div>
            <button onClick={generatePDF}>Generate Report</button>
        </div>
    );
};

export default Report;
