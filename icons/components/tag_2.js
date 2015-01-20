'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 39.00,9.00L15.513,9.00 L0.00,24.126L 15.513,39.00L39.00,39.00 c 4.962,0.00, 9.00-4.038, 9.00-9.00L48.00,18.00 C 48.00,13.038, 43.962,9.00, 39.00,9.00z M 42.00,30.00c0.00,1.659-1.341,3.00-3.00,3.00L18.00,33.00 L 8.487,24.126L 18.00,15.00l21.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00L42.00,30.00 zM 15.00,24.00A3.00,3.00 0.00 1,0 21.00,24.00A3.00,3.00 0.00 1,0 15.00,24.00z" />;
  }
});
