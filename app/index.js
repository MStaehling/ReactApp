var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');
var App = require('./components/App');

//state
//lifecycle event
//UI...only one that's required

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
