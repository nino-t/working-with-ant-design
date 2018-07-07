import HeadHtml from '../components/headHtml'
import { MainLayout } from '../components/layouts'
import { Button, Row, Col, Icon, DatePicker, Card, List, Avatar } from 'antd'
import { Line, Doughnut, HorizontalBar } from 'react-chartjs-2'

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

const data2 = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
]

const data3 = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
}

const data4 = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
}

export default () => (
	<MainLayout>
		<HeadHtml subTitle="Hello World" />

		<div className="wrap">
			<div className="well">
				<div style={{ display: 'flex', alignItems:'center'}}>
					<div className="circle-brand">
						<Icon type="dashboard" style={{ fontSize: 50, color: '#3498db' }} />
					</div>
					<div style={{ paddingLeft: '15px' }}>
				    	<h1>Listening Dashboard</h1>
				    	<p>
				    		One morning, when Gregor Samsa woke from troubled dreams.
				    	</p>				
					</div>
				</div>
			</div>
		</div>

		<div className="wrap">
			<div className="wrap-item wrap-filter">
				<div className="pull-left">
					<DatePicker />
					<DatePicker />
				</div>
				<div className="pull-right">
					<DatePicker />
					<Button type="default" icon="download">Export</Button>
				</div>
				<div className="clearfix"></div>
			</div>

			<div className="wrap-item wrap-count">
				<div className="well no-padding">
					<Row>
						<Col span={8}>						
							<div className="well-item">
								<b>Member</b>
								<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<h1>8931</h1>
									<div className="badge-kotak" style={{ background: '#3498db' }}>
										+150%
									</div>
								</div>
							</div>
						</Col>

						<Col span={8}>
							<div className="well-item">
								<b>Member</b>
								<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<h1>1221</h1>
									<div className="badge-kotak" style={{ background: '#f39c12' }}>
										-110%
									</div>
								</div>
							</div>
						</Col>

						<Col span={8}>
							<div className="well-item">
								<b>Member</b>
								<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<h1>2311</h1>
									<div className="badge-kotak" style={{ background: '#3498db' }}>
										-120%
									</div>
								</div>
							</div>
						</Col>					
					</Row>
				</div>
			</div>

			<div className="wrap-item">
				<Card title="Member Overview" bordered={false} style={{ width: '100%' }}>
			      <Line data={data} />
			   </Card>			
			</div>

			<div className="wrap-item wrap-top-resource">
				<Card title="Top Resource" bordered={false} style={{ width: '100%' }}>
					<Row>
						<Col span={8}>						
							<div className="well-item">
								<b>Member</b>
								<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<h1>8931</h1>
									<div className="badge-kotak" style={{ background: '#3498db' }}>
										+150%
									</div>
								</div>
							</div>
						</Col>

						<Col span={8}>
							<div className="well-item">
								<b>Member</b>
								<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<h1>1221</h1>
									<div className="badge-kotak" style={{ background: '#f39c12' }}>
										-110%
									</div>
								</div>
							</div>
						</Col>

						<Col span={8}>
							<div className="well-item">
								<b>Member</b>
								<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
									<h1>2311</h1>
									<div className="badge-kotak" style={{ background: '#3498db' }}>
										-120%
									</div>
								</div>
							</div>
						</Col>					
					</Row>
			   </Card>			
			</div>			

			<div className="wrap-item">
				<Row gutter={16}>
					<Col span={10}>
						<Card title="Language" bordered={false}>
							<Doughnut data={data3} />
					   </Card>								
					</Col>
					<Col span={14}>
						<Card title="Regional" bordered={false}>
						  <HorizontalBar data={data4} />
					   </Card>								
					</Col>
				</Row>
			</div>			

			<div className="wrap-item">
				<Row gutter={16}>
					<Col span={12}>
						<Card title="Top Member" bordered={false}>
						  <List
						    itemLayout="horizontal"
						    dataSource={data2}
						    renderItem={item => (
						      <List.Item>
						        <List.Item.Meta
						          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
						          title={<a href="https://ant.design">{item.title}</a>}
						          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
						        />
						      </List.Item> 
						    )} />
					   </Card>								
					</Col>
					<Col span={12}>
						<Card title="Top Mentor" bordered={false}>
						  <List
						    itemLayout="horizontal"
						    dataSource={data2}
						    renderItem={item => (
						      <List.Item>
						        <List.Item.Meta
						          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
						          title={<a href="https://ant.design">{item.title}</a>}
						          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
						        />
						      </List.Item> 
						    )} />
					   </Card>								
					</Col>
				</Row>
			</div>
		</div>
	</MainLayout>
)