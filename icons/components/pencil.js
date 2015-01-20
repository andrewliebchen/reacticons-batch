'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 18.00,42.00l-18.00,6.00l 6.00-18.00L 36.00,0.00l 12.00,12.00L 18.00,42.00z M 6.00,42.00l 9.00-3.00l-6.00-6.00L 6.00,42.00z M 12.00,30.00l 6.00,6.00l 18.00-18.00 l-6.00-6.00L 12.00,30.00z" />;
  }
});
