const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello World from Node.js</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(5000);
