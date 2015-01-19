'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 39.00,0.00L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,21.00 c0.00,4.968, 4.029,9.00, 9.00,9.00l 6.00,9.00l 6.00-9.00l18.00,0.00 c 4.968,0.00, 9.00-4.032, 9.00-9.00L48.00,9.00 C 48.00,4.029, 43.968,0.00, 39.00,0.00z M 24.00,30.00L9.00,30.00 L9.00,27.00 l15.00,0.00 L24.00,30.00 z M 39.00,24.00L9.00,24.00 L9.00,21.00 l30.00,0.00 L39.00,24.00 z M 39.00,18.00L9.00,18.00 L9.00,15.00 l30.00,0.00 L39.00,18.00 z M 39.00,12.00L9.00,12.00 L9.00,9.00 l30.00,0.00 L39.00,12.00 z" />;
  }
});

module.exports = SwitchOn;
