$(document).ready(function() {
    $("#login-form").submit(function(event) {
        event.preventDefault();
        var username = $("input[name=\"username\"]").val();
        var password = $("input[name=\"password\"]").val();
        if (username == "abba" && password == "allow") {
            chrome.runtime.sendMessage({"message": "allow"});
        }
        if (username == "no" && password == "no") {
            chrome.runtime.sendMessage({"message": "dont_allow"});
        }
        $("input[name=\"username\"]").val("");
        $("input[name=\"password\"]").val("");
    });
});
