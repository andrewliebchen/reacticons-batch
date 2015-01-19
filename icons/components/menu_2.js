'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 12.00,30.00l24.00,0.00 l0.00,6.00 L12.00,36.00 L12.00,30.00 z M 12.00,21.00l24.00,0.00 l0.00,6.00 L12.00,27.00 L12.00,21.00 z M 12.00,12.00l24.00,0.00 l0.00,6.00 L12.00,18.00 L12.00,12.00 z" />;
  }
});

module.exports = SwitchOn;
