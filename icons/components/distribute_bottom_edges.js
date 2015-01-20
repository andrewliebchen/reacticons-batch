'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.971, 43.971,48.00, 39.00,48.00z M 42.00,9.00c0.00-1.659-1.341-3.00-3.00-3.00L9.00,6.00 C 7.341,6.00, 6.00,7.341, 6.00,9.00l0.00,30.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,9.00 z M 15.00,36.00L9.00,36.00 l0.00,-3.00 l3.00,0.00 l0.00,-3.00 c0.00-1.659, 1.341-3.00, 3.00-3.00l18.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00l0.00,3.00 l3.00,0.00 l0.00,3.00 l-6.00,0.00 L15.00,36.00 z M 33.00,30.00L15.00,30.00 l0.00,3.00 l18.00,0.00 L33.00,30.00 z M 21.00,21.00L9.00,21.00 L9.00,18.00 l9.00,0.00 L18.00,15.00 c0.00-1.659, 1.341-3.00, 3.00-3.00l6.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00l0.00,3.00 l9.00,0.00 l0.00,3.00 L27.00,21.00 L21.00,21.00 z M 27.00,15.00L21.00,15.00 l0.00,3.00 l6.00,0.00 L27.00,15.00 z" />;
  }
});
