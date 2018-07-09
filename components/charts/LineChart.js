import { Line } from 'react-chartjs-2'

export const LineChart = props => {
	const data = {
	  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	  datasets: [
	    {
	      label: 'Member',
	      fill: false,
	      lineTension: 0.1,
	      backgroundColor: '#bdc3c7',
	      borderColor: '#bdc3c7',
	      borderCapStyle: 'butt',
	      borderDash: [],
	      borderDashOffset: 0.0,
	      borderJoinStyle: 'miter',
	      pointBorderColor: '#bdc3c7',
	      pointBackgroundColor: '#fff',
	      pointBorderWidth: 1,
	      pointHoverRadius: 5,
	      pointHoverBackgroundColor: '#bdc3c7',
	      pointHoverBorderColor: '#bdc3c7',
	      pointHoverBorderWidth: 2,
	      pointRadius: 1,
	      pointHitRadius: 10,
	      data: [65, 59, 80, 81, 56, 55, 40]
	    },
	    {
	      label: 'Mentor',
	      fill: false,
	      lineTension: 0.1,
	      backgroundColor: '#00d2d3',
	      borderColor: '#00d2d3',
	      borderCapStyle: 'butt',
	      borderDash: [],
	      borderDashOffset: 0.0,
	      borderJoinStyle: 'miter',
	      pointBorderColor: '#00d2d3',
	      pointBackgroundColor: '#fff',
	      pointBorderWidth: 1,
	      pointHoverRadius: 5,
	      pointHoverBackgroundColor: '#00d2d3',
	      pointHoverBorderColor: '#00d2d3',
	      pointHoverBorderWidth: 2,
	      pointRadius: 1,
	      pointHitRadius: 10,
	      data: [21, 12, 23, 54, 34, 67, 23]
	    }
	  ]
	}

	return (
		<div>
			<Line data={data} />
		</div>
	)
}