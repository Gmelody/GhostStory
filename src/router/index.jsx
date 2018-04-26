import {
	BrowserRouter as Router,
	Route,
	Link,
	NavLink,
	Switch
} from "react-router-dom";

import Index from "../containers/index";
import List from "../containers/list";
import Show from "../containers/show";
var FavList = ()=>(<div>收藏列表</div>)
export default (<Router>
	<Switch>
		<Route path="/list/:type" component={List}/>
		<Route path="/show/:id/:title" component={Show}/>
		<Route path="/favlist" component={FavList}/>
		<Route path="/" component={Index} />
	</Switch>
</Router>)