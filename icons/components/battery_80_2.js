'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 48.00,27.00L 48.00,27.00l0.00,3.00 l-3.00,0.00 l0.00,0.00c0.00,4.971-4.029,9.00-9.00,9.00L9.00,39.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,18.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l27.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l3.00,0.00 l0.00,3.00 l0.00,0.00L48.00,27.00 z M 39.00,18.00c0.00-1.656-1.341-3.00-3.00-3.00L9.00,15.00 C 7.341,15.00, 6.00,16.344, 6.00,18.00l0.00,12.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l27.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L39.00,18.00 z M 27.00,18.00l3.00,0.00 l0.00,12.00 L27.00,30.00 L27.00,18.00 z M 21.00,18.00l3.00,0.00 l0.00,12.00 L21.00,30.00 L21.00,18.00 z M 15.00,18.00l3.00,0.00 l0.00,12.00 L15.00,30.00 L15.00,18.00 z M 9.00,18.00l3.00,0.00 l0.00,12.00 L9.00,30.00 L9.00,18.00 z" />;
  }
});
