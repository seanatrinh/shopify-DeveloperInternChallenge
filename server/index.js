require('dotenv').config();
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
const cors = require('cors');
const controller = require('./controller');

// Webpack
const watching = compiler.watch({
  aggregateTimeout: 300,
  poll: undefined
}, (err, stats) => {
  console.log(stats.toString({
    chunks: false,
    colors: true
  }))
  if (stats.hasErrors()) {
    console.log('didn\' t build')
    return;
  }
  console.log('built');
});

// Express
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use('/', controller);

app.get('*', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Sean Trinh for Shopify</title>
  </head>
  <body>
    <div id="app"/>
    <script src="/bundle.js" type="text/javascript"></script>
  </body>
</html>`)
});

app.listen(port, function () {
  console.log(`App currently running; navigate to localhost:${port} in a web browser.`);
});
