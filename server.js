// const http = require('http');

// const server = http.createServer((req, res) => {
//   //console.log(req); //fires when page refreshes?
//   //res.write((req.url === '/').toString()); //why is it '/'?
//   //res.write('\n' + req.url);
//   if (req.url === '/about') {
//     res.write(`
//     <html>
//     <body>
//       <a href="./">home</a>
//     </body>
//     </html>
//     `);
//     res.end();
//   } else if (req.url === '/') {
//     res.write(`
//     <html>
//     <body>
//       <a href="./about">about</a>
//     </body>
//     </html>
//     `);
//     res.end();
//   } else {
//     res.statusCode = 404;
//     res.write('page not found yo');
//     res.end();
//   }
// });

// const port = process.env.PORT || 3000;
// server.listen(port, () => console.log(`listening on port ${port}`)); //callback fires when listening starts

const express = require('express');

const app = express();

console.log(app.toString());

app.get('/', (req, res, next) => {
  res.send(`
       <html>
       <body>
         <a href="./about">about</a>
       </body>
       </html>
       `);
});
app.get('/about', (req, res, next) => {
  res.send(`
       <html>
       <body>
         <a href="./">home</a>
       </body>
       </html>
       `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
