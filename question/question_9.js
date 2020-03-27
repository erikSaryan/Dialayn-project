const getQueryParams = (url) => {
    let queryParams = {};
    let anchor = document.createElement('a');
    anchor.href = url;
    let queryStrings = anchor.search.substring(1);
    let params = queryStrings.split('&');
    for (var i = 0; i < params.length; i++) {
        var pair = params[i].split('=');
        queryParams[pair[0]] = decodeURIComponent(pair[1]);
    }
    if("callback" in queryParams) {
        alert("Есть параметр callback, со значением: " + queryParams["callback"])
    }
    else {
        return
    }
};
getQueryParams('http://local.ru?callback=1');
