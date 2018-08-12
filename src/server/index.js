import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import template from './template';
import { PORT } from './config';

import App from '../client/App';

const app = express();
app.use(cors());
app.use(express.static('public'));

app.get('*', (req, res) => {
	const markup = renderToString(
		<App />
	);

	res.send(template({}, markup, 'Isomorphic express react app'));
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
