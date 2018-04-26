var config = {
	list:"http://route.showapi.com/955-1",
	show:"http://route.showapi.com/955-2",
	"showapi_appid":58278,
	"showapi_sign":"0b229d9aff9545b38c9866a10da0ed46"
}

function getBaseUrl(t="list"){
	return config[t]+"?showapi_appid="+config["showapi_appid"]+"&showapi_sign="+config["showapi_sign"];
}

export function getListUrl(type="dp",page=1) {
	return getBaseUrl()+"&type="+type+"&page="+page;
}

export function getShowUrl(id="",page=1) {
	return getBaseUrl('show')+"&id="+id+"&page="+page;
}