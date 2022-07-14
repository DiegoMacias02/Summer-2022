//Hypertext Transfer Protocol
const http = require("http");

// create server object
http
  .createServer((req, res) => {
    //Write response
    res.write("Hello World");
    res.end();
  })
  .listen(300, () => console.log('Server running...'));
