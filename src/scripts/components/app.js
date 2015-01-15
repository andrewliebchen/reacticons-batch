'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');


var App = React.createClass({
  render: function() {
    return (
      <div className="main">
        It works
      </div>
    );
  }
});
React.render(<App />, document.getElementById('content'));

module.exports = App;
