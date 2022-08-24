// const franc = require("franc")
// const langs = require("langs")
// const langCode = franc("alle menslike wesens words vry")

// const language = langs.where("3", langCode)
// console.log(language)


const http = require('http');
const hostname = '127.0.0.1';
const port = 8000;
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('hello world')
})

server.listen(port, hostname, function () {
    console.log(`server running at http://${hostname}:${port}`)
})

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];