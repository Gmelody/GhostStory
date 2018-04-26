//重置样式
import "normalize.css";
// import "./static/index.less";
import "./static/css/iconfont.css";

import 'whatwg-fetch';
//页面路由
import route from "./router";


ReactDOM.render(route,document.querySelector('#container'));