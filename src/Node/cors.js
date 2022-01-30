const express = require('express')
const cors = require('cors');
// Fetch api on node
const fetch = require('node-fetch');

const app = express()
app.use(cors());
console.log('\n---SERVER STARTED---');

app.get('/', (req, res) => {
  console.log('get received')
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed
  res.send('Hello World!')
})


//#region POST
app.post('/ste', (req, res) => {
  console.log('ciao')

  UPLOAD = 'https://photoslibrary.googleapis.com/v1/uploads';

  fetch(UPLOAD, {
    method: 'POST',
    body: req.body,
    headers: req.header
  })
    .then(res => res.json())
    .then(json => console.log(json));


  res.send("ciao")
})
//#endregion


app.listen(3000);