import Header from "../../components/Header/index";

import { getShowUrl } from "../../util/api";

export default class Show extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			id: this.props.match.params.id.replace(/\-/g,'/'),
			title:this.props.match.params.title,
			content:""
		}
	}
	render(){
		var html = {__html:this.state.content};
		return <div>
			<Header back="true">正文</Header>
			<h3>{this.state.title}</h3>
			<p style={{lineHeight:1.5,padding:'15px'}} dangerouslySetInnerHTML={html}></p>
		</div>
	}
	componentDidMount(){
		fetch(getShowUrl(this.state.id,1))
			.then(res=>(res.json()))
			.then(data=>{
				this.setState({
					content:data['showapi_res_body']['text']
				})
			})
	}
}