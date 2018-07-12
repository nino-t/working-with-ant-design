import { HorizontalBar } from 'react-chartjs-2'

export const HorizontalBarChart = props => {
	const data = {
	  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
	  datasets: [
	    {
	      label: 'ReactJS',
	      backgroundColor: '#E1F5FE',
	      borderColor: '#4FC3F7',
	      borderWidth: 1,
	      hoverBackgroundColor: '#E1F5FE',
	      hoverBorderColor: '#4FC3F7',
	      data: [100, 90, 80, 70, 60, 50, 40, 30, 20]
	    }
	  ]
	}

	const options = {
	    legend: {
	        display: false
	    }
	}	

	return (
		<div>
			<HorizontalBar data={data} options={options} height={245} />
		</div>
	)
}