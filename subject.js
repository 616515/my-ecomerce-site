const http = require('http');
const server = http.createServer(function(req,res){
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Method','GET,POST');
res.setHeader('Access-Control-Allow-Header','Content-Type');
res.writeHead('{"contactSubject":"General Enqury"+"Class"+"Schedule"+"Instructor"+"Price"+"other"}');
});
server.listen(4040)