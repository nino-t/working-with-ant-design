const Drawer = props => (
   <nav id="drawer">
   		<div style={{ display:'flex', justifyContent:'center', alignItems:'center', flexDirection: 'column', borderBottom: '2px solid #ddd', paddingBottom: '20px' }}>
   			<img src="/static/img/me.png" width="100" />
   			<b>Trisno Nino</b>
   		</div>
		<ul>
			<li><a href="#">Menu Item</a></li>
			<li><a href="#">Menu Item</a></li>
			<li><a href="#">Menu Item</a></li>
			<li><a href="#">Menu Item</a></li>
		</ul>
   </nav>	
)
export default Drawer