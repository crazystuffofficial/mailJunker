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
    }).then(function(response){
        return fetch("https://www.foxnews.com/portal/newsalertsubscribe?type=foxnation", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en-US,en;q=0.9",
                    "content-type": "application/json",
                    "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-requested-with": "XMLHttpRequest",
                },
                "referrer": "https://www.foxnews.com/newsletters",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": "{\"email\":\"" + email + "\",\"campaign\":\"fox-nation\",\"url\":\"https://www.foxnews.com/newsletters\"}",
                "method": "POST",
                "mode": "cors"
            });
    }.then(function(response){
        return fetch("https://www.nbcbayarea.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcbayarea.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"kntv_coronavirus\":1,\"KNBC_News7am\":1,\"KNBC_NewsNoon\":1,\"KNBC_News5pm\":1,\"KNBC_BreakingNews\":1,\"KNBC_Weather\":1,\"KNBC_Sports\":1,\"KNBC_Entertainment\":1,\"KNBC_Contests\":1,\"KNBC_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        });
    }.then(function(response){
        return fetch("https://www.nbcboston.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcboston.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WBTS_coronavirus\":1,\"WBTS_BreakingNews\":1,\"WBTS_News7am\":1,\"WBTS_NewsNoon\":1,\"WBTS_News5pm\":1,\"WBTS_News11pm\":1,\"WBTS_Weather\":1,\"WBTS_Entertainment\":1,\"WBTS_Investigations\":1,\"WBTS_Contests\":1}}",
            "method": "POST",
            "mode": "cors"
        });
    }.then(function(response){
        return fetch("https://www.nbcchicago.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcchicago.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WMAQ_coronavirus\":1,\"WMAQ_News7am\":1,\"WMAQ_Noon\":1,\"WMAQ_News8pm\":1,\"WMAQ_BreakingNews\":1,\"WMAQ_Weather\":1,\"WMAQ_Sports\":1,\"WMAQ_Entertainment\":1,\"WMAQ_Contests\":1,\"WMAQ_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        });
    }.then(function(response){
        return fetch("https://www.nbcconnecticut.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcconnecticut.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WVIT_coronavirus\":1,\"WVIT_News7am\":1,\"WVIT_NewsNoon\":1,\"WVIT_News8p\":1,\"WVIT_BreakingNews\":1,\"WVIT_Weather\":1,\"WVIT_Contest\":1,\"WVIT_Entertainment\":1,\"WVIT_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        });
    }.then(function(response){
        return fetch("https://www.nbcdfw.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcdfw.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"KXAS_coronavirus\":1,\"KXAS_News7am\":1,\"KXAS_NewsNoon\":1,\"KXAS_News8pm\":1,\"KXAS_BreakingNews\":1,\"KXAS_Weather\":1,\"KXAS_Entertainment\":1,\"KXAS_Announcements\":1,\"KXAS_Investigations\":1,\"KXAS_Contests\":1}}",
            "method": "POST",
            "mode": "cors"
        });
    }.then(function(response){
        return fetch("https://www.nbclosangeles.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcconnecticut.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WVIT_coronavirus\":1,\"WVIT_News7am\":1,\"WVIT_NewsNoon\":1,\"WVIT_News8p\":1,\"WVIT_BreakingNews\":1,\"WVIT_Weather\":1,\"WVIT_Contest\":1,\"WVIT_Entertainment\":1,\"WVIT_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        });
    }.then(function(response){
        return fetch("https://www.nbcmiami.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcmiami.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WTVJ_coronavirus\":1,\"WTVJ_BreakingNews\":1,\"WTVJ_News7am\":1,\"WTVJ_NewsNoon\":1,\"WTVJ_News8pm\":1,\"WTVJ_Weather\":1,\"WTVJ_Sports\":1,\"WTVJ_Entertainment\":1,\"WTVJ_Contests\":1}}",
            "method": "POST",
            "mode": "cors"
        });
    }.then(function(response){
        return fetch("https://www.nbcnewyork.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcnewyork.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WNBC_News7am\":1,\"WNBC_News11pm\":1,\"WNBC_Contests\":1,\"WNBC_BreakingNews\":1,\"WNBC_Weather\":1,\"WNBC_Olympics\":1}}",
            "method": "POST",
            "mode": "cors"
        });
    }).then(function(response){
        return fetch("https://www.nbcphiladelphia.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcphiladelphia.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WCAU_wawa\":1,\"WCAU_News7am\":1,\"WCAU_NewsNoon\":1,\"WCAU_News8pm\":1,\"WCAU_BreakingNews\":1,\"WCAU_Weather\":1,\"WCAU_Sports\":1,\"WCAU_Entertainment\":1,\"WCAU_Olympics\":1,\"WCAU_Contests\":1,\"WCAU_Announcements\":1}}",
            "method": "POST",
            "mode": "cors"
        });
    }).then(function(response){
        return fetch("https://www.nbcsandiego.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcsandiego.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"KNSD_coronavirus\":1,\"KNSD_News7am\":1,\"KNSD_NewsNoon\":1,\"KNSD_News6pm\":1,\"KNSD_BreakingNews\":1,\"KNSD_Weather\":1,\"KNSD_Sports\":1,\"KNSD_TheScene\":1,\"KNSD_Contests\":1,\"KNSD_SoundDiego\":1,\"KNSD_SoundDiegoPlatinum\":1,\"KNSD_WorthTheTrip\":1}}",
            "method": "POST",
            "mode": "cors"
        });
    }).then(function(response){
        return fetch("https://www.nbcwashington.com/wp-json/nbc/v1/subscriber/update/?_locale=user", {
            "headers": {
                "accept": "application/json, */*;q=0.1",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                "sec-ch-ua": "\"Google Chrome\";v=\"89\", \"Chromium\";v=\"89\", \";Not A Brand\";v=\"99\"",
                "sec-ch-ua-mobile": "?0",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin"
            },
            "referrer": "https://www.nbcwashington.com/newsletters/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "{\"email\":\"" + email + "\",\"fname\":\"AAAAAA\",\"lname\":\"BBBBBB\",\"zip\":\"22222\",\"sex\":\"female\",\"lists\":{\"WRC_coronavirus\":1,\"WRC_News7am\":1,\"WRC_NewsNoon\":1,\"WRC_News8pm\":1,\"WRC_Olympics\":1,\"WRC_BreakingNews\":1,\"WRC_Contests\":1,\"WRC_Sports\":1,\"WRC_Entertainment\":1,\"WRC_Weather\":1}}",
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
