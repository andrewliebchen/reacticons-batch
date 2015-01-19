'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 39.00,39.00l-6.00,9.00l-6.00-9.00L9.00,39.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,21.00 C 48.00,34.968, 43.971,39.00, 39.00,39.00z M 9.00,30.00l15.00,0.00 L24.00,27.00 L9.00,27.00 L9.00,30.00 z M 39.00,9.00L9.00,9.00 l0.00,3.00 l30.00,0.00 L39.00,9.00 z M 39.00,15.00L9.00,15.00 l0.00,3.00 l30.00,0.00 L39.00,15.00 z M 39.00,21.00L9.00,21.00 l0.00,3.00 l30.00,0.00 L39.00,21.00 z" />;
  }
});

module.exports = SwitchOn;
