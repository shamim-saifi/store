import React from 'react'
import {
    Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend
} from 'chart.js'
import { Line, Doughnut } from 'react-chartjs-2'
ChartJS.register(
    CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, ArcElement, Legend
)

export const LineChart = () => { 
    const labels = getListYearMonths()
    console.log(labels)
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom"
            },
            title: {
                display: true,
                text: "Yearly Views"
            }
        }
    }
    const data = {
        labels,
        datasets: [
            {
                label: 'Views',
                data: [1, 9, 3,1,9,5,3,6,1,2],
                borderColor: 'black',
                backgroundColor: 'yellow'
            }
        ]
    }
    return (
        <Line options={options} data={data} />
    )
}

export const DoughnutChart = () => {
    const data = {
        labels: ['Subscribed', 'Not subscribed'],
        datasets: [
            {
                label: 'Views',
                data: [30, 70],
                borderColor: ['black', 'red'],
                backgroundColor: ['yellow', 'tomato'],
                borderWidth: 1,
            }
        ]
    }
    return (
        <Doughnut data={data} />
    )
}

function getListYearMonths() {
    const months = [
        'January', 'February', 'March', 'April','May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ]
    const labels = []
    const currentMonth = new Date().getMonth();
    const remain = 11 - currentMonth;

    for (let i = currentMonth; i < months.length; i--) {
        const element = months[i];
        labels.unshift(element);
        if (i === 0) break
    }
 
    for (let i = 11; i > remain; i--) {
        const element = months[i];
        labels.unshift(element);
        if (i === currentMonth) break
    }
 
return labels;
}


