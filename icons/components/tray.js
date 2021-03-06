'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 39.00,39.00L9.00,39.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,21.00 l 12.00-12.00l24.00,0.00 l 12.00,12.00l0.00,9.00 C 48.00,34.971, 43.971,39.00, 39.00,39.00z M 33.516,15.00L14.487,15.00 L 6.00,24.00l9.00,0.00 l0.00,3.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l12.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L33.00,24.00 l9.00,0.00 L 33.516,15.00z" />;
  }
});
