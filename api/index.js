const express = require("express");
const app = express();
const ytdownload = require("@vreden/youtube_scraper")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/ytdlmp3/:id', async (req,res) => {
const q = req.query.data
//console.log(q)
let urlyt = `https://www.youtube.com/watch?v=${q}`
try{
const respon = await ytdownload.ytmp3(urlyt,'128')
  res.send(respon.download.url)
}catch(e){
    res.end()
}
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
