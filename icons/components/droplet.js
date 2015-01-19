'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 24.00,48.00c-8.286,0.00-15.00-6.714-15.00-15.00S 24.00,0.00, 24.00,0.00s 15.00,24.714, 15.00,33.00S 32.286,48.00, 24.00,48.00z M 32.832,31.653C 32.058,35.832, 28.404,39.00, 24.00,39.00s-8.058-3.168-8.832-7.347C 15.066,32.154, 15.00,32.619, 15.00,33.00c0.00,4.971, 4.029,9.00, 9.00,9.00s 9.00-4.029, 9.00-9.00 C 33.00,32.619, 32.934,32.154, 32.832,31.653z" />;
  }
});

module.exports = SwitchOn;
