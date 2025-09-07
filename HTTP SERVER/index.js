const http = require("node:http")

const server = http.createServer( function (req, res) {
    console.log("We got a reuest");  
    console.log(`Incoming Headers at [${Date.now()}]`);  
    // console.log(req.headers);
    console.log(req.method);

    switch(req.url) {
        case '/':
            res.writeHead(200);
            return res.end(`Homepage`)
        
        case '/contact-us':
            res.writeHead(200);
            return res.end(`Contact me bro`)
        
        case '/about':
            res.writeHead(200);
            return res.end(`I am software eng`)
        
        default:
            res.writeHead(404);
            return res.end(`You got lost lol`)
    }
    

    //db operations...
    // res.writeHead(200);
    // // res.end("Thanks for visiting the server haha")
    // res.end(`Hey, You can accept ${req.headers['accept-language']}`)
})

server.listen(8000,  function () {
    console.log("The Server has been set");
})