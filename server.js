// server for local development. 

const express = require('express');
const app = express();
const PORT = 3000;
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

app.use('/images',express.static('images'));

app.get('/',(req, res) =>{
    res.send(`Welcome to the home page...!!`);
});

app.get('/paintings/:id',(req, res) =>{
    let painting_id = Number(req.params.id);
    res.send(`${painting_id}`);
});

app.get('/error',(req, res) =>{
    res.send(`OOPS... something went wrong..!!`);
});

app.listen(PORT, () =>{
   console.log(`Server is running on port:${PORT}`);   
});