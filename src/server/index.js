import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router, matchPath } from 'react-router';
import api from './api';
import template from './template';
import { PORT } from './config';

import App from 'client/components/App';

// temp stub
const users = [
  { id: 'd55aq11', username: 'strandol', password: '123456' }
]; 

passport.use(new LocalStrategy((username, password, cb) => {
  const user = users.find(u => u.username === username);

  if (!user || user.password !== password) return cb(null, false);

  return cb(null, user);
}));
passport.serializeUser((user, cb) => cb(null, user.id));
passport.deserializeUser((id, cb) => {
  const user = users.find(u => u.id === id);

  if (!user) return cb(new Error('No user with such id!'));

  cb(null, user);
});

const routes = [
  '/'
];

const app = express();

app.use(cors());
app.use(express.static('build'));
app.use(morgan(__DEV__ ? 'dev' : 'short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use('/api', api);

app.get('*', (req, res) => {
  const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);

  console.log('====================================');
  console.log(req.url);
  console.log(match);
  console.log('====================================');
  
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

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
