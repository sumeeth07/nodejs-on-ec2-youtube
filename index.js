var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Welcome to Sumeeth  & Credit with Thanks  - A Monk in Cloud'); //write a response to the client
  res.end(); //end the response
}).listen(80); //the server object listens on port 80 , mention your port specific

