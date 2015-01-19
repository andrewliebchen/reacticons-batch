'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 39.00,0.00L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,30.00 c0.00,4.968, 4.029,9.00, 9.00,9.00l30.00,0.00 c 4.968,0.00, 9.00-4.032, 9.00-9.00L48.00,9.00 C 48.00,4.029, 43.968,0.00, 39.00,0.00z M 7.50,42.00C 6.672,42.00, 6.00,41.328, 6.00,40.50C 6.00,39.675, 6.672,39.00, 7.50,39.00 C 8.328,39.00, 9.00,39.675, 9.00,40.50C 9.00,41.328, 8.328,42.00, 7.50,42.00z M 7.50,9.00C 6.672,9.00, 6.00,8.328, 6.00,7.50C 6.00,6.672, 6.672,6.00, 7.50,6.00C 8.328,6.00, 9.00,6.672, 9.00,7.50 C 9.00,8.328, 8.328,9.00, 7.50,9.00z M 33.00,39.00c0.00,1.659-1.341,3.00-3.00,3.00L18.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L15.00,9.00 c0.00-1.656, 1.344-3.00, 3.00-3.00l12.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00L33.00,39.00 z M 40.50,42.00c-0.825,0.00-1.50-0.672-1.50-1.50c0.00-0.825, 0.675-1.50, 1.50-1.50s 1.50,0.675, 1.50,1.50C 42.00,41.328, 41.325,42.00, 40.50,42.00z M 40.50,9.00 C 39.675,9.00, 39.00,8.328, 39.00,7.50C 39.00,6.672, 39.675,6.00, 40.50,6.00S 42.00,6.672, 42.00,7.50C 42.00,8.328, 41.325,9.00, 40.50,9.00z M 27.00,9.00L21.00,9.00 C 19.344,9.00, 18.00,10.344, 18.00,12.00l0.00,9.00 c0.00,1.656, 1.344,3.00, 3.00,3.00l6.00,0.00 c 1.659,0.00, 3.00-1.344, 3.00-3.00L30.00,12.00 C 30.00,10.344, 28.659,9.00, 27.00,9.00z" />;
  }
});

module.exports = SwitchOn;
