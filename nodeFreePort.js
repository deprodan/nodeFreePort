const express = require('express')
const app = express()
baseport=3000



app.get('/', function (req, res) {  return
  res.send('Hello World!')
})


listenFn=function(port, app, fn){
  app.listen(port, function () {
      console.log("Listening on port "+port);
      portFinded=true;
  }).on('error', function(err) {
      if(err.code == 'EADDRINUSE'){
      console.log("Error port "+ port+" used, trying with port "+(++port)+"...");
      fn(port,app,fn);
      }else{
      throw err;
      }
     });
  }

listenFn(baseport,app, listenFn);
