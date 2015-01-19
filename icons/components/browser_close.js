'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.971, 43.971,48.00, 39.00,48.00z M 42.00,9.00c0.00-1.656-1.341-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,6.00 l36.00,0.00 L42.00,9.00 z M 42.00,18.00L6.00,18.00 l0.00,21.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,18.00 z M 30.363,36.363c-1.173,1.173-3.069,1.173-4.242,0.00L 24.00,34.242l-2.121,2.121 c-1.173,1.173-3.072,1.173-4.242,0.00c-1.173-1.173-1.173-3.069,0.00-4.242L 19.758,30.00L 17.637,27.879c-1.173-1.173-1.173-3.072,0.00-4.242 c 1.17-1.173, 3.069-1.173, 4.242,0.00L 24.00,25.758l 2.121-2.121c 1.173-1.173, 3.069-1.173, 4.242,0.00c 1.173,1.17, 1.173,3.069,0.00,4.242L 28.242,30.00 l 2.121,2.121C 31.536,33.294, 31.536,35.19, 30.363,36.363z M 12.00,12.00L9.00,12.00 L9.00,9.00 l3.00,0.00 L12.00,12.00 z M 18.00,12.00L15.00,12.00 L15.00,9.00 l3.00,0.00 L18.00,12.00 z M 39.00,12.00L21.00,12.00 L21.00,9.00 l18.00,0.00 L39.00,12.00 z" />;
  }
});

module.exports = SwitchOn;
