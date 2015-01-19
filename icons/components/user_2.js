'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 33.00,48.00L15.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00l0.00,0.00 c 0.927-5.502, 4.629-10.125, 9.336-12.732C 13.281,24.114, 12.00,21.213, 12.00,18.00L12.00,12.00 c0.00-6.627, 5.373-12.00, 12.00-12.00s 12.00,5.373, 12.00,12.00l0.00,6.00 c0.00,3.213-1.281,6.114-3.333,8.268C 37.371,28.875, 41.073,33.498, 42.00,39.00l0.00,0.00C 42.00,43.968, 37.968,48.00, 33.00,48.00z M 30.00,18.00L30.00,12.00 c0.00-3.312-2.688-6.00-6.00-6.00 S 18.00,8.688, 18.00,12.00l0.00,6.00 c0.00,3.312, 2.688,6.00, 6.00,6.00S 30.00,21.312, 30.00,18.00z M 36.00,39.00c-1.338-5.169-6.417-9.00-12.00-9.00l0.00,0.00l0.00,0.00c-5.586,0.00-10.662,3.831-12.00,9.00l0.00,0.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l18.00,0.00 C 34.659,42.00, 36.00,40.659, 36.00,39.00L 36.00,39.00z" />;
  }
});

module.exports = SwitchOn;
