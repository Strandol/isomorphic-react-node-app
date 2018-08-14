import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router, matchPath } from 'react-router';
import template from './template';
import { PORT } from './config';

import App from 'client/App';

const routes = [
  '/'
]

const app = express();

app.use(cors());
app.use(express.static('build'));

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

	res.send(template({}, markup, 'Isomorphic application'));
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
