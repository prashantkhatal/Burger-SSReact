import express from 'express'
import path from 'path'
import template from './src/template'
import App from './src/components/App'

import React from 'react'
import { renderToString } from 'react-dom/server'

const PORT = process.env.PORT || 3000;

/*
 *add these in local env file and uncomment below lines while running on local 
 * and change process.env.defaultDatabase = 'mysql' if using mysql database
 */
// process.env.DATABASE_URL = 'databaseURI here';
// process.env.defaultDatabase = 'mysql';

const app = express()

app.use(express.urlencoded({ extended: true }));

// Serving static files
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/build', express.static(path.resolve(__dirname, 'build')));

// hide powered by express
app.disable('x-powered-by');
// start the server
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

// import routes
const routes = require("./burger-api/controllers/burgers_controller");
app.use(routes);

// server rendered home page
// app.get('/', (req, res) => {
//   // const { preloadedState, content}  = ssr(initialState);
//   const content = renderToString(<App />);
//   const response = template("Burger HW 13", content)
//   res.setHeader('Cache-Control', 'assets, max-age=604800')
//   res.send(response);
// });

// Pure client side rendered page
app.get(['/client', "*"], (req, res) => {
  let response = template('Burger HW 13')
  res.setHeader('Cache-Control', 'assets, max-age=604800')
  res.send(response)
});
