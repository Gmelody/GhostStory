import {NavLink,Route} from "react-router-dom";

import "./index.less";

import Home from "./Home";
import Cate from "./Cate";
import Me from "./Me";

export default class Index extends React.Component{
	render(){
		return <div>
			<Route exact path="/" component={Home}/>
			<Route path="/cate" component={Cate}/>
			<Route path="/me" component={Me}/>
			<div className="nav">
				<NavLink exact to="/" activeClassName="nav-active">
					<span></span>
					<span>首页</span>
				</NavLink>
				<NavLink to="/cate" activeClassName="nav-active">
					<span></span>
					<span>分类</span>
				</NavLink>
				<NavLink to="/me" activeClassName="nav-active">
					<span></span>
					<span>我的</span>
				</NavLink>
			</div>
		</div>
	}
}

