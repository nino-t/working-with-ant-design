import Header from './Header'
import Footer from './Footer'
import Drawer from './Drawer'
import { Layout } from 'antd'
import '../../../theme.less'

import { Icon } from 'antd'

const { Content } = Layout
export const MainLayout = (props) => (
  <Layout className="layout">
	<input type="checkbox" id="drawer-toggle" name="drawer-toggle"/>
	<label htmlFor="drawer-toggle" id="drawer-toggle-label">
		<Icon type="menu-unfold" style={{ color: '#fff', fontSize: '30px', marginTop:'10px' }} />
	</label>

	<Header />
  	<Drawer />
  	<div id="page-content">
	    <Content className="container">
	    	{props.children} 
	    </Content>
    </div>
  </Layout>
)