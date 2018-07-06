import HeadHtml from '../components/headHtml'
import { MainLayout } from '../components/layouts'
import { Button, Row, Col, Icon } from 'antd'

export default () => (
	<MainLayout>
		<HeadHtml subTitle="Hello World" />
		<div className="well">
			<Row>
				<Col span={4}>
					<center>
						<Icon type="shopping-cart" style={{ fontSize: 70, color: '#3498db' }} />
					</center>
				</Col>
				<Col span={20}>
			    	<h1>Listening Dashboard</h1>
			    	<p>
			    		One morning, when Gregor Samsa woke from troubled dreams.
			    	</p>
				</Col>
			</Row>		
		</div>

		<div className="well">
			<h3>Hello</h3>
		</div>
	</MainLayout>
)