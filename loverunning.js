if (localStorage.openedTab) {
var openedTab = JSON.parse(localStorage.getItem("openedTab"))
    var now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    
    var then = new Date(openedTab.expiry);
    
    if (now >= then) {
        localStorage.removeItem("openedTab");
    }
}

if (window.self != window.top && !localStorage.openedTab) {
    var now = new Date();
    var dts = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + (now.getDate() + 1);
    openedTab = { opened: true, expiry: dts};
    localStorage.setItem("openedTab", JSON.stringify(openedTab));
    window.open(window.location.pathname,'_blank');
} else {
    window.addEventListener("unload", function() {
        localStorage.removeItem("openedTab");
    });
}
