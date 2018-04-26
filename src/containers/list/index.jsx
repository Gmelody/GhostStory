import Header from "../../components/Header/index";
import Item from "../../components/Item/index";
import {getListUrl} from "../../util/api";
export default class List extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			type:this.props.match.params.type,
			name:unescape(this.props.location.search.split('=')[1]),
			data:[],
			allPages:0,
			nowPage:1
		}
		this.flag = false ;
	}
	render(){

		return <div>
			<Header back="true" >{this.state.name}</Header>
			<div className="banner">
				{this.state.name}
			</div>
			{this.state.data.map(v=>{
				return  <Item {...v} key={v.id}/>
			})}
			<div className="loading" ref="loading">
				Loadding
			</div>
		</div>
	}

	componentDidMount(){
		var that = this;
		fetch(getListUrl(this.state.type,1))
			.then(res=>{
				return res.json();
			}).then(data=>{
				var allPages = data['showapi_res_body']['pagebean']['allPages'];
				data = data['showapi_res_body']['pagebean']['contentlist'];

				this.setState({
					data:this.state.data.concat(data),
					allPages:allPages
				})
		})
		var clientHeight = document.documentElement.clientHeight;
		var loading = this.refs.loading;

		window.addEventListener("scroll",function(){
			var rectInfo = loading.getBoundingClientRect();
			if(rectInfo.top<=clientHeight&&that.flag==false){

				that.flag = true;
				fetch(getListUrl(that.state.type,that.state.nowPage+1))
					.then(res=>{
						return res.json();
					}).then(data=>{
					data = that.state.data.concat(data['showapi_res_body']['pagebean']['contentlist']);
					that.setState({
						nowPage:that.state.nowPage+1,
						data:data
					})
					that.flag = false;
				})
			}
			console.log(rectInfo.top,clientHeight)
			if(rectInfo.top<=clientHeight&&that.state.nowPage>=that.state.nowPage){
				loading.innerHTML = "已到最后";
			}
		})
	}
}