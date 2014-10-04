chrome.runtime.onMessage.addListener(function (res, sender) {
	var tab = sender.tab;
	chrome.pageAction.show(tab.id);

	var icon = 'sha1';
	var tooltip = ' is using SHA-1';
	if (res.cert.algorithm.match(/^sha2/)) {
		icon = 'sha2';
		tooltip = ' is using SHA-2';
	}

	// change the icon
	chrome.pageAction.setIcon({
		path: 'icon-' + icon + '.png',
		tabId: tab.id
	});

	// change the tooltip
	chrome.pageAction.setTitle({
		title: tab.url + tooltip,
		tabId: tab.id
	});
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if(changeInfo.status == "complete") {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			chrome.tabs.sendMessage(tabs[0].id, tab);
		});
	}
});
