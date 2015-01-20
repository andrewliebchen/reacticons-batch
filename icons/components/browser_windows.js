'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 42.00,38.448L42.00,15.00 c0.00-4.971-4.032-9.00-9.00-9.00L9.552,6.00 C 10.791,2.511, 14.088,0.00, 18.00,0.00l21.00,0.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,21.00 C 48.00,33.915, 45.486,37.209, 42.00,38.448z M 39.00,18.00l0.00,21.00 c0.00,4.968-4.032,9.00-9.00,9.00L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,18.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l21.00,0.00 C 34.968,9.00, 39.00,13.029, 39.00,18.00z M 6.00,39.00c0.00,1.659, 1.344,3.00, 3.00,3.00l21.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L33.00,27.00 L6.00,27.00 L6.00,39.00 z M 6.00,18.00l0.00,6.00 l27.00,0.00 L33.00,18.00 c0.00-1.656-1.341-3.00-3.00-3.00L9.00,15.00 C 7.344,15.00, 6.00,16.344, 6.00,18.00z M 30.00,21.00L21.00,21.00 L21.00,18.00 l9.00,0.00 L30.00,21.00 z M 15.00,18.00l3.00,0.00 l0.00,3.00 L15.00,21.00 L15.00,18.00 z M 9.00,18.00l3.00,0.00 l0.00,3.00 L9.00,21.00 L9.00,18.00 z" />;
  }
});
