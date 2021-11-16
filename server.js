require('dotenv').config();
const fs = require("fs");
const express = require('express');
const expressStaticGzip = require('express-static-gzip');
const path = require('path');
const app = express();
const setupProxy = require('./src/setupProxy');
const PORT = process.env.PORT || 3000

app.use(expressStaticGzip(path.join(__dirname, 'build')));

setupProxy(app);

app.get('/*', function (req, res) {
  let indexFile = path.join(__dirname, 'build', 'index.html')
  if (fs.existsSync(indexFile)) {
     res.sendFile(indexFile);
  } else {
     res.sendFile(path.join(__dirname, 'upgrade.html'));
  }
});
app.listen(PORT, function () {
    console.log(`Server start on port ${PORT}...! Please access on browser http://localhost:${PORT}`)
});
