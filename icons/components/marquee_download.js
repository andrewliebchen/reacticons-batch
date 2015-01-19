'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 42.00,27.00L 48.00,27.00L 48.00,33.00L 42.00,33.00zM 42.00,15.00L 48.00,15.00L 48.00,21.00L 42.00,21.00zM 42.00,9.00 C 42.00,7.344 40.659,6.00 39.00,6.00 L 39.00,0.00 C 43.971,0.00 48.00,4.029 48.00,9.00 L 42.00,9.00 ZM 27.00,42.00L 33.00,42.00L 33.00,48.00L 27.00,48.00zM 27.00,0.00L 33.00,0.00L 33.00,6.00L 27.00,6.00zM 32.772,25.851 C 33.234,26.976 32.976,28.263 32.121,29.121 L 26.121,35.121 C 25.536,35.706 24.768,36.00 24.00,36.00 C 23.232,36.00 22.464,35.706 21.879,35.121 L 15.879,29.121 C 15.021,28.263 14.766,26.973 15.228,25.851 C 15.69,24.732 16.788,24.00 18.00,24.00 L 21.00,24.00 L 21.00,14.997 C 21.00,13.338 22.344,11.997 24.00,11.997 C 25.659,11.997 27.00,13.338 27.00,14.997 L 27.00,24.00 L 30.00,24.00 C 31.212,24.00 32.31,24.732 32.772,25.851 ZM 15.00,0.00L 21.00,0.00L 21.00,6.00L 15.00,6.00zM 6.00,39.00 C 6.00,40.659 7.344,42.00 9.00,42.00 L 9.00,48.00 C 4.029,48.00 0.00,43.971 0.00,39.00 L 6.00,39.00 ZM 0.00,9.00 C 0.00,4.029 4.029,0.00 9.00,0.00 L 9.00,6.00 C 7.344,6.00 6.00,7.344 6.00,9.00 L 0.00,9.00 ZM0.00,15.00L 6.00,15.00L 6.00,21.00L0.00,21.00zM0.00,27.00L 6.00,27.00L 6.00,33.00L0.00,33.00zM 15.00,42.00L 21.00,42.00L 21.00,48.00L 15.00,48.00zM 39.00,42.00 C 40.659,42.00 42.00,40.659 42.00,39.00 L 48.00,39.00 C 48.00,43.971 43.971,48.00 39.00,48.00 L 39.00,42.00 Z" />;
  }
});

module.exports = SwitchOn;
