const express = require("express");
const app = express();
const ytdownload = require("./ytdl3.js")
const aichat = require('./aitoxic.js')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/ai/:id', async (req,res) => {
const q = req.query.data
//console.log(q)
const emulate = () =>{
async function start() {
try{
const respon = await aichat(q)
  res.send(respon.respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/ytdlmp3/:id', async (req,res) => {
const q = req.query.data
//console.log(q)
let urlyt = `https://www.youtube.com/watch?v=${q}`
try{
const respon = await ytdownload(urlyt)
  res.send(respon)
}catch(e){
    res.end()
}
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
