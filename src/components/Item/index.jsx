import {Link} from "react-router-dom";
import "./index.less"
export  default  class Item extends React.Component{

	render(){
		return <Link className="item" to={`/show/${this.props.id.replace(/\//g,'-')}/${this.props.title}`}>
			<div className="item-left" style={{backgroundImage:`url(${this.props.img})`}}></div>
			<div className="item-right">
				<h3>{this.props.title}</h3>
				<p style={{"WebkitBoxOrient": "vertical"}}>{this.props.desc}</p>
			</div>
		</Link>
	}
}
Item.defaultProps = {
	id:"",
	title:"",
	desc:"",
	img:"http://placehold.it/300x400"
}