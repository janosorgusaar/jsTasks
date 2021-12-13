// You need: npm install xmlhttprequest --save

function showUserIp() {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    Request = new XMLHttpRequest();
    Request.open("GET", "https://checkip.amazonaws.com", true);
    Request.onreadystatechange = function () {
        if (this.readyState == 4) {
            console.log(this.responseText);
        }
    };
    Request.send();
}

showUserIp()



