'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 24.00,48.00c-13.254,0.00-24.00-10.746-24.00-24.00s 10.746-24.00, 24.00-24.00s 24.00,10.746, 24.00,24.00 S 37.254,48.00, 24.00,48.00z M 24.00,6.00C 14.061,6.00, 6.00,14.061, 6.00,24.00c0.00,9.942, 8.061,18.00, 18.00,18.00s 18.00-8.058, 18.00-18.00C 42.00,14.061, 33.939,6.00, 24.00,6.00z M 24.00,39.00L24.00,9.00 c 8.286,0.00, 15.00,6.717, 15.00,15.00 C 39.00,32.286, 32.286,39.00, 24.00,39.00z" />;
  }
});

module.exports = SwitchOn;
