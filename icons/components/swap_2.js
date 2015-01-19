'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 47.772,22.851C 47.31,21.732, 46.212,21.00, 45.00,21.00l-3.00,0.00 L42.00,15.00 c0.00-4.971-4.029-9.00-9.00-9.00L27.00,6.00 L27.00,2.997 c0.00-1.212-0.732-2.31-1.851-2.772 c-1.122-0.462-2.412-0.204-3.27,0.651l-6.00,6.00C 15.294,7.461, 15.00,8.229, 15.00,8.997s 0.294,1.536, 0.879,2.121l 6.00,6.00 c 0.858,0.858, 2.148,1.113, 3.27,0.651C 26.268,17.307, 27.00,16.209, 27.00,14.997L27.00,12.00 l6.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,6.00 l-3.00,0.00 c-1.212,0.00-2.31,0.732-2.772,1.851 c-0.462,1.122-0.204,2.412, 0.651,3.27l 6.00,6.00C 37.464,32.706, 38.232,33.00, 39.00,33.00s 1.536-0.294, 2.121-0.879l 6.00-6.00 C 47.979,25.263, 48.234,23.973, 47.772,22.851zM 24.00,30.00 C 25.659,30.00 27.00,31.341 27.00,33.00 L 27.00,45.00 C 27.00,46.659 25.659,48.00 24.00,48.00 L 12.00,48.00 C 10.344,48.00 9.00,46.659 9.00,45.00 L 9.00,42.00 L 15.00,42.00 L 21.00,42.00 L 21.00,36.00 L 21.00,30.00 L 24.00,30.00 ZM 18.00,36.00L18.00,24.00 c0.00-1.656-1.344-3.00-3.00-3.00L3.00,21.00 C 1.344,21.00,0.00,22.344,0.00,24.00l0.00,12.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l12.00,0.00 C 16.656,39.00, 18.00,37.659, 18.00,36.00z M 12.00,33.00 L6.00,33.00 L6.00,27.00 l6.00,0.00 L12.00,33.00 z" />;
  }
});

module.exports = SwitchOn;
