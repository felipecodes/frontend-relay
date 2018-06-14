import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/promise';
import 'core-js/es6/object';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (module.hot) {
  module.hot.accept('./', () => {
    console.log('Accepting the updated printMe module!');
  });
}

ReactDOM.render(<App />, document.querySelector('#root'));
