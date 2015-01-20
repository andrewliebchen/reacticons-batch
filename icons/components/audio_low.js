'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 9.00,36.00c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,21.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l3.00,0.00 l 15.00-12.00l0.00,48.00 l-15.00-12.00L9.00,36.00 z M 21.00,36.00L21.00,27.00 L21.00,21.00 L21.00,12.00 L 15.00,18.00L9.00,18.00 C 7.341,18.00, 6.00,19.344, 6.00,21.00l0.00,6.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l6.00,0.00 L 21.00,36.00z" />;
  }
});
