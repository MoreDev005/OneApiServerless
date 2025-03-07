const express = require("express");
const app = express();
const ytmp3 = require("./savetube.js");
const aichat = require('./aitoxic.js');
const tikwm = require('./tikwm.js');
const ig = require('./ig.js');
const yt = require('./yt.js');
const fb = require('./fb.js');
const {getBuffer} = require('./myfunc.js');
const downloadFileAsBuffer = require('./downloadFileAsBuffer.js');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.get('/download/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
const respon = await downloadFileAsBuffer(q)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/getbuffer/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
const respon = await getBuffer(q)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

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

app.get('/ig/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await ig(q,baseUrl)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/fb/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await fb(q,baseUrl)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.get('/yt/:id', async (req,res) => {
const q = req.query.data
const emulate = () =>{
async function start() {
try{
let baseUrl = `${req.protocol}://${req.headers.host}`
const respon = await yt(q,baseUrl)
  res.send(respon)
}catch(e){
    res.end()
}
}
start()
}
emulate()
});

app.listen(3000, () => console.log("Server ready on port 3000"));

module.exports = app;
