'use strict';

var React = require('react/addons');

var Icon = require('../../../icons');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');


var App = React.createClass({
  render: function() {
    return (
      <div className="main">
        <Icon.SwitchOn size={100} className="icon"/>
        <Icon.Tag />
        <Icon.Tag2 />
        <Icon.Tag3 />
        <Icon.Tag4 />
        <Icon.Terminal />
        <Icon.Terminal2 />
        <Icon.Terminal3 />
      </div>
    );
  }
});
React.render(<App />, document.getElementById('content'));

module.exports = App;
