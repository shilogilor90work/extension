DOMAINS = ["y8.com", "tankionline.com", "kizi.com", "sploder.com"];
var myNewUrl = "file:///Users/shilogilor/Desktop/extension/no_page.html";
ALLOWED = true;

/**
 * check if this link is in the list of urls we keep track
 * @param  {string} link - to check if link is one of the links we track.
 */
function in_url_list(link) {
    return DOMAINS.some(v => link.includes(v));
}

// listener for changing tabs
chrome.tabs.onActivated.addListener( function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
        console.log(tab.url);
        console.log(ALLOWED);
        console.log(in_url_list(tab.url));
        if (in_url_list(tab.url) && !ALLOWED){//match patturn) {
            chrome.tabs.update(tab.id, {url: myNewUrl});
        }
    });
});

// listener for url was changed
chrome.tabs.onUpdated.addListener((tabId, change, tab) => {
    if (tab.active && change.url) {
        console.log(tab.url);
        console.log(ALLOWED);
        console.log(in_url_list(tab.url));
        if (in_url_list(tab.url) && !ALLOWED){//match patturn) {
            chrome.tabs.update(change.id, {url: myNewUrl});
        }
    }
});


// comunication with popup and injected content
chrome.runtime.onMessage.addListener(function(request) {
    // content of page has done a search,
    if( request.message === "dont_allow" ) {
        ALLOWED = false;
    }
    else if( request.message === "allow" ) {
        ALLOWED = true;
    }
});
