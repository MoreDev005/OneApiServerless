const express = require("express");
const app = express();
const ytmp3 = require("./savetube.js")
const aichat = require('./aitoxic.js')
const tikwm = require('./tikwm.js')
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/ai/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
const respon = await aichat(q)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/ytmp3/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
const respon = await ytmp3(q,"128","audio")
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/tiktok/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
const respon = await tikwm(q)
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
