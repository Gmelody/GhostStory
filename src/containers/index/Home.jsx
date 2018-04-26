import Header from "../../components/Header/index";
import Item from "../../components/Item/index";

import {Link} from "react-router-dom";

import ReactSwipe from "react-swipe";

import { getListUrl } from "../../util/api.js";

export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			cagtes:[{
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
			}]
		}
	}
	render(){
		return <div className="index">
			<Header>首页</Header>
			<Carousel/>
			{
				this.state.cagtes.map(v=>{
					return <IndexList key={v.id} {...v}/>
				})
			}

		</div>
	}
}
//首页轮播图
class Carousel extends React.Component {
	render() {
		return (
			<ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
				<div>
					<img src={require("../../static/images/8.jpg")} alt=""/>
				</div>
				<div>
					<img src={require("../../static/images/9.jpg")} alt=""/>
				</div>
				<div>
					<img src={require("../../static/images/10.jpg")} alt=""/>
				</div>
			</ReactSwipe>
		);
	}
}


class IndexList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			lists:[]
		}
	}
	render(){
		return <div className="index-list">
			<div className="list-title">
				<h3>{this.props.name}</h3>
				<Link className="more" to={"/list/"+this.props.type+"?name="+escape(this.props.name)}>MORE+</Link>
			</div>
			{this.state.lists.map(v=>{
				return <Item {...v} key={v.id}/>
			})}

		</div>
	}
	componentDidMount(){
		fetch(getListUrl(this.props.type,1))
			.then(res=>{
				return res.json();
			})
			.then(data=>{
				data = data['showapi_res_body']['pagebean']['contentlist'];
				this.setState({
					lists:data.slice(0,5)
				})
			})
	}
}