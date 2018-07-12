import { Layout, Menu, Icon } from 'antd'

const { Header } = Layout
export default () => (
    <div className="navbar">
      <Header className="nav-first">
        <div className="pull-left">
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}>
            <Menu.Item><Icon type="file-text" /></Menu.Item>
            <Menu.Item><Icon type="area-chart" /></Menu.Item>
            <Menu.Item><Icon type="appstore-o" /></Menu.Item>
          </Menu>
        </div>
        <div className="pull-right">
          <div style={{ display:'flex', justifyContent:'center'}}>
            <div style={{ paddingRight: '10px' }} className="wrap-username">
              <b style={{ color: '#fff' }}>Trisno Nino</b>
              {/*<small style={{ color: '#fff' }}>Web Developer</small>*/}
            </div>          
            <div>
              <img src="/static/img/me.png" width="35" />
            </div>
            <div style={{ paddingLeft: '10px' }}>
              <Icon type="caret-down" style={{ color: '#fff' }} className="ic-caret" />              
            </div>            
          </div>
        </div>      
        <div className="clearfix"></div>
      </Header>

      <div className="nav-second">
        <div className="pull-left">
          <Menu
            mode="horizontal">
            <Menu.Item>
              Dashboard
            </Menu.Item>
            <Menu.Item>
              Statistik
            </Menu.Item>          
            <Menu.Item>
              Web Interface
            </Menu.Item>          
            <Menu.Item>
              Desktop Interface
            </Menu.Item>                    
          </Menu>        
        </div>
        <div className="pull-right nav-right">
          <Menu
            mode="horizontal">
            <Menu.Item>
              <a href="">
                <Icon type="plus" /> New Dashboard
              </a>
            </Menu.Item>                   
          </Menu>                
        </div>              
        <div className="clearfix"></div>
       </div>       
    </div>
)