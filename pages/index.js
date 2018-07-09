import HeadHtml from '../components/headHtml'
import { MainLayout } from '../components/layouts'
import { Button, Row, Col, Icon, DatePicker, Card, List, Avatar } from 'antd'
import { Bar } from 'react-chartjs-2'

import { DoughnutChart, HorizontalBarChart, LineChart } from '../components/charts'

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

const data5 = {
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
			      <LineChart />
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
						<Card title="Top Programming Language" bordered={false}>
							<DoughnutChart />
					   </Card>								
					</Col>
					<Col span={14}>
						<Card title="ReactJS Trending" bordered={false}>
						  <HorizontalBarChart />
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