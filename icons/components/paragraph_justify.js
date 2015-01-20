'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 0.00,3.00 L 48.00,3.00 L 48.00,9.00 L 0.00,9.00 L 0.00,3.00 Z M 0.00,21.00 L 0.00,15.00 L 48.00,15.00 L 48.00,21.00 L 0.00,21.00 Z M 0.00,33.00 L 0.00,27.00 L 48.00,27.00 L 48.00,33.00 L 0.00,33.00 Z M 0.00,45.00 L 0.00,39.00 L 24.00,39.00 L 24.00,45.00 L 0.00,45.00 Z" />;
  }
});
