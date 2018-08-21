// import 'babel-polyfill';

import bodyParser from 'body-parser';
import cors from 'cors';
import fs from 'fs';
import express from 'express';
import https from 'https';
import mongoose from 'mongoose';
import morgan from 'morgan';
import passport from 'passport';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router, matchPath } from 'react-router';
import api from './api';
import template from './template';
import { PORT, DB_PATH } from './config';
import configPassport from './configPassport';

import App from 'client/components/App';

const privateKey = fs.readFileSync('./keys/server.key', 'utf8');
const certificate = fs.readFileSync('./keys/server.cert', 'utf8');

const https_credentials = {
  key: privateKey,
  cert: certificate
};

mongoose.connect(DB_PATH, err => {
	if (err) console.log(err);
	console.log('Connected to mongodb.');
});

const routes = [
  '/'
];

const app = express();

configPassport();

app.use(express.static('build'));
app.use(cors());
app.use(morgan(__DEV__ ? 'dev' : 'short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use('/api', api);

app.get('*', (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
  
  if (!match) {
    res.status(404).send('Error 404');
    return;
  }

	const markup = renderToString(
    <Router context={{}} location={req.url}>
      <App />
    </Router>
	);

	res.send(template({}, markup, 'Isomorphic app'));
});

const httpsServer = https.createServer(https_credentials, app);
httpsServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
