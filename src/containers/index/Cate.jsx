import Header from "../../components/Header/index";
import {Link} from "react-router-dom";
export default class Cate extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cates:[{
				id:1,
				name:'短篇',
				type:'dp'
			},{
				id:2,
				name:'长篇',
				type:'cp'
			},{
				id:3,
				name:'校园',
				type:'xy'
			},{
				id:4,
				name:'医院',
				type:'yy'
			},{
				id:5,
				name:'家里',
				type:'jl'
			},{
				id:6,
				name:'民间',
				type:'mj'
			},{
				id:7,
				name:'灵异',
				type:'ly'
			},{
				id:8,
				name:'原创',
				type:'yc'
			}
			]
		}
	}
	render(){
		return <div>
			<Header>栏目</Header>
			<div className="cate-list">
				{this.state.cates.map((v,i)=>{
					return <Link to={"/list/"+v.type+"?name="+escape(v.name) }  style={{float:'left',width:'50%',height:'120px',background:"url("+require(`./images/cate${i+1}.jpg`)+") no-repeat center center /cover" }} key={v.id}>{v.name}</Link>
				})}
			</div>

		</div>
	}
}