const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
const { data } = require('./data')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here
app.get('/topRankings', (req, res) => {
    let limit = Number(isNaN(req.param('limit')) ? 20 : req.param('limit'));
    let offset = Number(isNaN(req.param('offset')) ? 0 : req.param('offset'));
    limit = limit + offset;
    console.log(limit);
    const requiredPosts = data.slice(offset, limit);
    res.send(requiredPosts);
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
