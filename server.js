const express = require('express');
const app = express();
const port = 10077;

app.listen(port);
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/style'));

app.get('/ajax_data', function(req, res){
  var fs =  require("fs");
  var data = fs.readFileSync("./msg.txt", "UTF8");
  data = req.query.msg + '</br></br>\n' + data;
  fs.writeFileSync("./msg.txt", data, "UTF8");
  res.send(data);
})
