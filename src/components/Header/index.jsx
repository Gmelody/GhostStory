import "./index.less";

export default class Header extends React.Component{
	render(){
		return <div className="index-header">
			<span onTouchStart={this.tapHandle} className={this.props.back?'iconfont icon-fanhui1':''} > </span>
			<h3>{this.props.children}</h3>
			<span></span>
		</div>
	}
	tapHandle(){
		history.go(-1);
	}
}
Header.defaultProps={
	back:false
}