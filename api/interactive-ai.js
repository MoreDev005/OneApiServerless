const axios = require('axios');

const interactive = async (asset)=> {
let head = {
  'Accept': '*/*',
  'Accept-Encoding': 'gzip, deflate, br, zstd',
  'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSUQiOiJZSG9JQXVmcTNzR0ZqUjZ6b1Zsd0hkbXhDbU1JWi1FXyIsInRpbWVzdGFtcCI6IjIwMjUtMDQtMDJUMTc6NDY6MDkuNDc1WiIsImlhdCI6MTc0MzYxNTk2OSwiZXhwIjoxNzQzOTc1OTY5fQ.abT9pYZUhFA-D6ZaoC6faTSsFkZfV-3D0lzDHx3s6G8',
  'Content-Type': 'application/json',
  'Cookie': 'connect.sid=s%3AYHoIAufq3sGFjR6zoVlwHdmxCmMIZ-E_.h%2FkN6IEXRnb2oWEPWLJHfwiduA%2BSaS0yNEcW4IcyZB8; GAESA=CpoBMDBhZmFlODA0MzA4YzZjNzUxNGE1MjQyMjFkMzY2ZWViNjBiOTBmMWQyMzEzMDRmODhkNWI3NzA2ZTE0YjQyNDFlM2ZmNGJlNmYxZWZkNzg3YmMyZDRkNjY2MjI4YzNlNTJlZGI4MjhlYThmNjk3MGU4ZjMwNWI2NzExYTNlMjAxNzRmNzUzYWM1MTc4MjYzYmMxNmRhNGYwZBDIkfG83zI; _ga=GA1.1.1204108700.1743615970; cf_clearance=W.Brmzwly0k_BTrywLGA1ht_K_rAE0svFOZa_AEqRAk-1743615970-1.2.1.1-U87gfmlnpYjAGnKtdKGmTzpqCaek9NS5DHVZdHzJrPfVRTEH550v0qnuWxlmCJjTuRd_CxiKBeWVjbCMv_hNLl79KhX2IC.S86patpyG5bcWgXFZGEcy8PaxPd2vFOM8PsMaaj3A1yEZXH.dtOAGLRr7IhUcWrw9KXUeRcKrge42pTVxB_VlZI9TQ3ZHAFQ_tnOFJyhTIevhtsXJxwtXIYlkdob._Mwt9_8sxp19aIAMXXpi9aaKrIHVS0MzNDxrDTiiVSGQmAFdLXpvcsxQ4RBZYKf11BoiFxcacwiDKPCb45sP.jGEhvvD8n47.MavRlr2QtLoDer9sKeZWr_f.YjXKOHRKfGHc78nd0Nbcck; _ym_uid=1743615971782127001; _ym_d=1743615971; _ym_isad=2; sessionId=8657e24b16876fae0bb94a228aa80580; _ga_QGJHPSYCTQ=GS1.1.1743615969.1.1.1743616125.60.0.0',
  'Origin': 'https://gptchatly.com',
  'Priority': 'u=1, i',
  'Referer': 'https://gptchatly.com/virtual-girlfriend.html',
  'Sec-CH-UA': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
  'Sec-CH-UA-Mobile': '?0',
  'Sec-CH-UA-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'empty',
  'Sec-Fetch-Mode': 'cors',
  'Sec-Fetch-Site': 'same-origin',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
}

// Example Axios request with the headers
let response = await axios.post('https://gptchatly.com/dolphin',asset, { headers : head })
return response.data
}

module.exports = interactive;
