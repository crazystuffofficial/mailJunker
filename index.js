import express from 'express';
import fs from 'fs';
import fetch from "node-fetch";
const app = express();
var num = 0;
function spam(theemail, encodedEmail, path){
    fetch("https://www.cbssports.com/fantasy/newsletter-sign-up/xhr/", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-requested-with": "XMLHttpRequest",
        },
        "referrer": "https://www.cbssports.com/newsletters/cbs-sports-hq/",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": "action=optIn&custId=&destination=cbs&masterProductId=23708&mCode=m23661&source=nlsplash&userLogin=&emailAddress=" + encodedEmail,
        "method": "POST",
        "mode": "cors"
    }).then(function(response) {
        return fetch("https://www.cbssports.com/fantasy/newsletter-sign-up/xhr/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
            },
            "referrer": "https://www.cbssports.com/newsletters/pick-six/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "action=optIn&custId=&destination=cbs&masterProductId=23708&mCode=m23664&source=nlsplash&userLogin=&emailAddress=" + encodedEmail,
            "method": "POST",
            "mode": "cors"
        });
    }).then(function(response) {
        return fetch("https://www.cbssports.com/fantasy/newsletter-sign-up/xhr/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
            },
            "referrer": "https://www.cbssports.com/newsletters/fantasy-football-today/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "action=optIn&custId=&destination=cbs&masterProductId=23708&mCode=m23662&source=nlsplash&userLogin=&emailAddress=" + encodedEmail,
            "method": "POST",
            "mode": "cors"
        });
    }).then(function(response) {
        return fetch("https://www.cbssports.com/fantasy/newsletter-sign-up/xhr/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
            },
            "referrer": "https://www.cbssports.com/newsletters/fantasy-baseball-today/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "action=optIn&custId=&destination=cbs&masterProductId=23708&mCode=m23663&source=nlsplash&userLogin=&emailAddress=" + encodedEmail,
            "method": "POST",
            "mode": "cors"
        });
    }).then(function(response) {
        return fetch("https://www.cbssports.com/fantasy/newsletter-sign-up/xhr/", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
            },
            "referrer": "https://www.cbssports.com/newsletters/the-first-cut/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "action=optIn&custId=&destination=cbs&masterProductId=23708&mCode=m23584&source=nlsplash&userLogin=&emailAddress=" + encodedEmail,
            "method": "POST",
            "mode": "cors"
        });
    }).then(function(response) {
        return fetch("https://www.cbsnews.com/newsletters/xhr/signup", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "text/plain",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.cbsnews.com/newsletters/widget?v=4303070594ae09e4278f40f24f771b58&subs=e889%2Ce881%2Ce882%2Ce879%2Ce883%2Ce884%2Ce241",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + theemail + "\",\"sub\":\"e889,e881,e882,e879,e883,e884,e241\"}",
            "method": "POST",
            "mode": "cors"
        });
    }).catch(function() {
        num--;
    }).then(function(response){
        num = num + 1;
        fs.writeFileSync(path + '/file.txt', num);
    });    
}
app.use(express.static("static"));
app.get('/sendMail/:id1/:id2', (req, res) => {
    const id1 = atob(req.params.id1);
    const id2 = atob(req.params.id2);
    const theemail = id1;
    const times = id2;
    const encodedEmail = theemail.replace('@', '%40');
    fs.writeFileSync(req.url + '/file.txt', "Loading...");
    for(var i = 0; i < times; i++){
    spam(theemail, encodedEmail, req.url);
    }
    res.sendFile('/spamPages/spam.html');
});
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
