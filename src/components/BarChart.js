import React, { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

function BarChart(props) {

    const [data, setData] = useState({
        labels: props.labels,
        datasets: props.datasets
    });


    return (
        <div className="chart container mt-3">

            <h2 className="text-center my-3">Chart</h2>

            <Bar
                data={ data }
                width={100}
                height={50}
                options={{
                    maintainAspectRatio: true,
                    title: {
                        display: true,
                        text: 'Largest Cities in State',
                        fontSize: 25
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />


        </div>
    )
}



export default BarChart;