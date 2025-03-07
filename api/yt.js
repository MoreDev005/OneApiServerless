const axios = require('axios');
const yt = async (url,baseUrl) =>{
let time = new Date()
function getYouTubeVideoId(url) {
	const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|v\/|embed\/|user\/[^\/\n\s]+\/)?(?:watch\?v=|v%3D|embed%2F|video%2F)?|youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtube\.com\/v\/|youtube\.com\/shorts\/|youtube\.com\/playlist\?list=)([a-zA-Z0-9_-]{11})/;
	const match = url.match(regex);
	return match ? match[1] : null;
}
let videoID = await getYouTubeVideoId(url)
// Menyiapkan data json
const jsondata ={"youtube_id":videoID,"quality":4,"formatValue":1}

const config = {
  headers: {
    "Accept": "*/*",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
    "Content-Type": "application/json",
    "Origin": "https://cnvmp3.com",
    "Priority": "u=1, i",
    "Referer": "https://cnvmp3.com/v23",
    "Sec-CH-UA": '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
    "Sec-CH-UA-Mobile": "?0",
    "Sec-CH-UA-Platform": '"Windows"',
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36"
  }
};

try{
let respon = await axios.post('https://cnvmp3.com/check_database.php', jsondata, config)
if(respon.status == 200){
if(respon.data.success == false){
let profildata = {"url":`https://www.youtube.com/watch?v=${videoID}`,"token":"1234"}
let get_video_data = await axios.post('https://cnvmp3.com/get_video_data.php', profildata, config)
if(get_video_data.data.succes){
let ucep = {"url":`https://www.youtube.com/watch?v=${videoID}`,"quality":4,"title":get_video_data.data.title,"formatValue":1}
let download_video_ucep = await axios.post('https://cnvmp3.com/download_video_ucep.php', ucep, config)
if(download_video_ucep.data.succes){
let insertdb = {"youtube_id":videoID,"server_path":download_video_ucep.data.download_link,"quality":4,"title":get_video_data.data.title,"formatValue":1}
await axios.post('https://cnvmp3.com/download_video_ucep.php', inserdb, config)
return {status: true, author: "iwan", result:{title:get_video_data.data.title, link:download_video_ucep.data.download_link,linkUnblock:`${baseUrl}/download/id?data=${encodeURIComponent(download_video_ucep.data.download_link)}`}}
}
}
}	
if(respon.data == '')return {status: false, author: "iwan", message: "Gagal mengunduh"}
return {status: true, author: "iwan", result:{title:respon.title, link:respon.data.server_path,linkUnblock:`${baseUrl}/download/id?data=${encodeURIComponent(respon.data.server_path)}`}}
}else{
  return {status: false, author: "iwan", message: "Gagal mengunduh"}
}
}catch(e){
  return {status: false, author: "iwan", message: e.message}
}
}

module.exports = yt;
