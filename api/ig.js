const axios = require('axios');
const cheerio = require('cheerio');


const ig = async (url) =>{
let time = new Date()
// Menyiapkan data form
const formData = new FormData();
formData.append('link', url);
formData.append('downloader', 'video');
formData.append('pageLoad', time);

const config = {
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
    'Connection': 'keep-alive',
    'Content-Length': '134',
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'Cookie': 'PHPSESSID=5rl20jre4776743m6np8lo34m0',
    'Host': 'indownloader.app',
    'Origin': 'https://indownloader.app',
    'Referer': 'https://indownloader.app/video-downloader',
    'Sec-CH-UA': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    'Sec-CH-UA-Mobile': '?0',
    'Sec-CH-UA-Platform': '"Windows"',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'same-origin',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
    'X-Requested-With': 'XMLHttpRequest'
  }
};

try{

let respon = await axios.post('https://indownloader.app/request', formData, config)
console.log(respon.data)
if(respon.status == 200){
if(respon.data.error)return {status: false, author: "iwan", message: "Gagal mengunduh"}
let $ = cheerio.load(respon.data.html)
let thumb = $('.post-thumb > img').attr('src')
let link = $('.download-options > a').attr('href')
return {status: true, author: "iwan", result:{thumb:thumb, link:link}}
}else{
  return {status: false author: "iwan", message: "Gagal mengunduh"}
}
}catch(e){
  return {status: false, author: "iwan", message: e.message}
}
}

module.exports = ig;
