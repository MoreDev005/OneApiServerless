const express = require("express");
const app = express();
const {mp3v4} = require('./ytdl3.js')
const {getBuffer} = require('./myfunc.js')
const downloadFileAsBuffer = require('./downloadFileAsBuffer.js')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/ytdlmp3/:id', async (req,res) => {
const q = req.query.data
//console.log(q)
let urlyt = `https://www.youtube.com/watch?v=${q}`
const emulate = () =>{
async function start() {
try{
const respon = await mp3v4(urlyt)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
