'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 24.00,48.00l-6.00-18.00L0.00,24.00l 48.00-24.00L 24.00,48.00z M 24.00,36.00l 15.00-27.00L 21.00,27.00L 24.00,36.00z" />;
  }
});
