'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 45.00,48.00L3.00,48.00 c-1.659,0.00-3.00-1.341-3.00-3.00L0.00,12.00 c0.00-1.656, 1.341-3.00, 3.00-3.00l3.00,0.00 L6.00,6.00 l3.00,0.00 l0.00,3.00 l6.00,0.00 L15.00,3.00 c0.00-1.656, 1.341-3.00, 3.00-3.00l12.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,6.00 l12.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,12.00 l0.00,3.00 l0.00,18.00 C 48.00,46.659, 46.659,48.00, 45.00,48.00z M 27.00,6.00L21.00,6.00 l0.00,3.00 l6.00,0.00 L27.00,6.00 z M 42.00,15.00l-12.00,0.00 L18.00,15.00 L6.00,15.00 l0.00,9.00 l11.334,0.00 l0.00,0.00C 18.984,22.173, 21.345,21.00, 24.00,21.00s 5.016,1.173, 6.666,3.00l0.00,0.00L42.00,24.00 L42.00,15.00 z M 18.00,30.00c0.00,3.312, 2.688,6.00, 6.00,6.00s 6.00-2.688, 6.00-6.00S 27.312,24.00, 24.00,24.00 S 18.00,26.688, 18.00,30.00z M 42.00,27.00l-9.552,0.00 l0.00,0.00C 32.784,27.942, 33.00,28.941, 33.00,30.00c0.00,4.968-4.029,9.00-9.00,9.00s-9.00-4.032-9.00-9.00c0.00-1.059, 0.216-2.058, 0.552-3.00l0.00,0.00L6.00,27.00 l0.00,15.00 l36.00,0.00 L42.00,27.00 z M 39.00,21.00l-6.00,0.00 L33.00,18.00 l6.00,0.00 L39.00,21.00 z M 15.00,18.00l3.00,0.00 l0.00,3.00 L15.00,21.00 L15.00,18.00 z M 9.00,18.00l3.00,0.00 l0.00,3.00 L9.00,21.00 L9.00,18.00 z" />;
  }
});

module.exports = SwitchOn;
