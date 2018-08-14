import React from 'react';
import { hydrate, render } from 'react-dom';
import Root from './components/Root';

import 'semantic-ui-css/semantic.min.css';

const renderFunc = module.hot ? render : hydrate;

renderFunc(
  <Root/>,
	document.getElementById('app')
);

if (module.hot) {
	module.hot.accept();
}