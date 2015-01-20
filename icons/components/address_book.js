'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports  = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 42.00,48.00L12.00,48.00 c-1.659,0.00-3.00-1.341-3.00-3.00l0.00,-3.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00l0.00,-3.00 c0.00-1.656-1.341-3.00-3.00-3.00L9.00,15.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L12.00,9.00 c0.00-1.656-1.341-3.00-3.00-3.00L9.00,3.00 c0.00-1.656, 1.341-3.00, 3.00-3.00l30.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,42.00 C 45.00,46.659, 43.659,48.00, 42.00,48.00z M 36.00,31.50c-0.462-2.751-2.313-5.064-4.668-6.366C 32.361,24.06, 33.00,22.605, 33.00,21.00L33.00,18.00 c0.00-3.312-2.688-6.00-6.00-6.00 S 21.00,14.688, 21.00,18.00l0.00,3.00 c0.00,1.605, 0.639,3.06, 1.668,4.134C 20.313,26.436, 18.462,28.749, 18.00,31.50l0.00,0.00C 18.00,33.984, 20.016,36.00, 22.50,36.00l9.00,0.00 C 33.984,36.00, 36.00,33.984, 36.00,31.50L 36.00,31.50z M 7.50,12.00l-3.00,0.00 C 3.672,12.00, 3.00,11.328, 3.00,10.50S 3.672,9.00, 4.50,9.00l3.00,0.00 C 8.328,9.00, 9.00,9.672, 9.00,10.50S 8.328,12.00, 7.50,12.00z M 3.00,3.00 c0.00-1.656, 1.341-3.00, 3.00-3.00l0.00,6.00 L3.00,6.00 L3.00,3.00 z M 6.00,33.00L3.00,33.00 L3.00,15.00 l3.00,0.00 L6.00,33.00 z M 4.50,36.00l3.00,0.00 C 8.328,36.00, 9.00,36.672, 9.00,37.50S 8.328,39.00, 7.50,39.00l-3.00,0.00 C 3.672,39.00, 3.00,38.328, 3.00,37.50 S 3.672,36.00, 4.50,36.00z M 6.00,48.00c-1.659,0.00-3.00-1.341-3.00-3.00l0.00,-3.00 l3.00,0.00 L6.00,48.00 z" />;
  }
});
