const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: false }))

function setCorsHeaders(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
}

app.use(setCorsHeaders);

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.post('/', (req, res) => {
    console.log('POST request received to "/"')
    console.log('req.body:',req.body)
    res.send('Hello world!')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})