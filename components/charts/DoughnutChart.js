import { number } from '../../lib'
import { Doughnut } from 'react-chartjs-2'

export const DoughnutChart = props => {
	const data = {
		labels: [
			'Javascript',
			'PHP',
			'Python',
			'Golang',
			'Ruby'

		],
		datasets: [{
			data: [300000, 120000, 100000, 150000, 200000],
			backgroundColor: [
			'#29B6F6',
			'#4FC3F7',
			'#81D4FA',
			'#B3E5FC',
			'#E1F5FE'
			],
			hoverBackgroundColor: [
			'#29B6F6',
			'#4FC3F7',
			'#81D4FA',
			'#B3E5FC',
			'#E1F5FE'
			]
		}]
	}	

	const options = {
	    legend: {
	        display: false
	    }
	}	

	return(
		<div>
			<Doughnut data={data} options={options} />
			<div className="wwa-menu-chart">
				{
					data.labels.map((label, index) => (
						<div style={{ display:'flex' }}>
							<span>
								<div className="circle-doughnut" style={{ background: data.datasets[0].backgroundColor[index] }}></div>
								<b style={{ flex: 1 }}>{label}</b>
							</span>
							<span style={{ flex: 1, textAlign:'right'}}>{number.thousandFormat(data.datasets[0].data[index])} Users</span>
						</div>
					))
				}
			</div>
		</div>
	)
}