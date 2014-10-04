chrome.runtime.onMessage.addListener(function (res, sender, sendResponse) {
	// Only run on fully-qualified secure URLs
	if (res.url.match(/^https:\/\//)) {
		var host = getHostname(res.url);
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "https://shaaaaaaaaaaaaa.com/api/check/"+host, true);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				chrome.runtime.sendMessage( JSON.parse(xhr.responseText) );
			}
		}
		xhr.send();
	}
});

// Return the bare hostname from a full url
function getHostname(url) {
	var host = url.replace(/^https?:\/\//,'');
	slashIndex = host.indexOf("/");
	if (slashIndex > 0) {
		host = host.substring(0, slashIndex);
	}
	return host;
}
