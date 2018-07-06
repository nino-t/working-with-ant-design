import Header from './Header'
import Footer from './Footer'
import { Layout } from 'antd'
import '../../../theme.less'

const { Content } = Layout
export const MainLayout = (props) => (
  <Layout className="layout">
  	<Header />
    <Content className="container">
    	{props.children} 
    </Content>
  </Layout>
)