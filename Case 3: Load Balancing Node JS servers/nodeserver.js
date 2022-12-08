var http = require('http');

function serve(ip, port)
{
        http.createServer(function (req, res) {
            res.end("\nServer listening on port  "+ip+":"+port+"\n");
        }).listen(port, ip);
        console.log('Listening on port and IP  at http://'+ip+':'+port+'/');
}

// Three servers listening on localhost IP and ports can be anything
serve('127.0.0.1', 8000);
serve('127.0.0.1', 8085);
serve('127.0.0.1', 8090);
