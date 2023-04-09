// ===========================|| DASHBOARD - TOTAL GROWTH BAR CHART ||=========================== //

const array = JSON.parse(localStorage.getItem('emailCount'));

const chartData = {
    height: 450,
    type: 'bar',
    options: {
        chart: {
            id: 'bar-chart',
            // stacked: false,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 0
                    }
                }
            }
        ],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '65%'
            }
        },
        xaxis: {
            type: 'category',
            categories: ['Technology', 'Ecommerce', 'Social Media', 'Search', 'News', 'Music', 'Travel', 'OTT', 'Education']
        },
        legend: {
            show: true,
            fontSize: '14px',
            fontFamily: `'Roboto', sans-serif`,
            position: 'bottom',
            offsetX: 20,
            labels: {
                useSeriesColors: false
            },
            markers: {
                width: 16,
                height: 16,
                radius: 5
            },
            itemMargin: {
                horizontal: 15,
                vertical: 8
            }
        },
        fill: {
            type: 'solid'
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true
        }
    },
    series: [
        {
            name: 'Total Accounts',
            data: [10, 6, 20, 2, 1, 2, 2, 2, 3]
        },
        {
            name: 'Accounts Found',
            data: array
        }
    ]
};
export default chartData;
