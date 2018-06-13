import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

if (module.hot) {
  module.hot.accept('./', function() {
    console.log('Accepting the updated printMe module!');
  });
}

ReactDOM.render(<App />, document.querySelector('#root'));
