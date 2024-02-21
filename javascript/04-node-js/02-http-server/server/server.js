const httpServer = require("http")
const internsData = require("./data/interns.json")



const SERVER_PORT = 2814

httpServer.createServer((req, res)=>{

    // console.log(req);
    res.write(JSON.stringify(internsData))
    res.end()
}).listen(SERVER_PORT)