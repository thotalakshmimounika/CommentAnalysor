import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

function Home() {
    // State for the search input
    const [searchTerm, setSearchTerm] = useState('');

    // Data for the pie chart
    const data = [
        { name: 'Positive', value: 300 },
        { name: 'Negative', value: 12 },
        { name: 'Neutral', value: 33 },
    ];

    // Colors for each section of the pie chart
    const COLORS = ['#00C49F', '#FF6D00', '#FFC107'];

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Handle analyze button click
    const handleAnalyzeClick = () => {
        alert(`Analyzing: ${searchTerm}`);
    };

    return (
        <main className='main-container'>
            {/* Search Bar and Analyze Button */}
            <div className='search-bar-container'>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Paste the URL of the video that you need to analyze...."
                    className="search-bar"
                />
                <button
                    onClick={handleAnalyzeClick}
                    className="analyze-button"
                >
                    Analyze
                </button>
            </div>

            {/* Cards Section */}
            <div className='main-cards'>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Positive</h3>
                    </div>
                    <h1>300</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Negative</h3>
                    </div>
                    <h1>12</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Neutral</h3>
                    </div>
                    <h1>33</h1>
                </div>
                <div className='card'>
                    <div className='card-inner'>
                        <h3>Total</h3>
                    </div>
                    <h1>{data.reduce((acc, item) => acc + item.value, 0)}</h1>
                </div>
            </div>

            {/* Pie Chart */}
            <div className='charts'>
                <div className='chart-container'>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                label
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </main>
    );
}

export default Home;
