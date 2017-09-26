var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

//state
//lifecycle event
//UI...only one that's required

class App extends React.Component {
  render() {
    return (
      <div>
      Hello World!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
