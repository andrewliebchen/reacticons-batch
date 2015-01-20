'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.971, 43.968,48.00, 39.00,48.00z M 42.00,9.00c0.00-1.656-1.341-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,30.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,9.00 z M 27.00,30.00l9.00,0.00 l0.00,6.00 L27.00,36.00 L27.00,30.00 z M 27.00,21.00l9.00,0.00 l0.00,6.00 L27.00,27.00 L27.00,21.00 z M 27.00,12.00l9.00,0.00 l0.00,6.00 L27.00,18.00 L27.00,12.00 z M 12.00,12.00l9.00,0.00 l0.00,24.00 L12.00,36.00 L12.00,12.00 z" />;
  }
});
