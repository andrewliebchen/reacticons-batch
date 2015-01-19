'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 47.772,37.851C 47.31,36.732, 46.212,36.00, 45.00,36.00l-3.00,0.00 L42.00,10.50 C 42.00,4.701, 37.299,0.00, 31.50,0.00S 21.00,4.701, 21.00,10.50l0.00,27.00 C 21.00,39.984, 18.987,42.00, 16.50,42.00S 12.00,39.984, 12.00,37.50S 12.00,12.00, 12.00,12.00l3.00,0.00 c 1.212,0.00, 2.31-0.732, 2.772-1.851 c 0.462-1.122, 0.207-2.412-0.651-3.27l-6.00-6.00C 10.533,0.294, 9.765,0.00, 9.00,0.00S 7.464,0.294, 6.876,0.879l-6.00,6.00 c-0.855,0.858-1.113,2.148-0.651,3.27C 0.69,11.268, 1.785,12.00, 3.00,12.00l3.00,0.00 c0.00,0.00,0.00,19.701,0.00,25.50S 10.701,48.00, 16.50,48.00C 22.302,48.00, 27.00,43.299, 27.00,37.50l0.00,-27.00 C 27.00,8.013, 29.016,6.00, 31.50,6.00S 36.00,8.013, 36.00,10.50L36.00,36.00 l-3.00,0.00 c-1.212,0.00-2.31,0.732-2.772,1.851c-0.462,1.122-0.204,2.412, 0.651,3.27l 6.00,6.00 C 37.464,47.706, 38.232,48.00, 39.00,48.00s 1.536-0.294, 2.121-0.879l 6.00-6.00C 47.979,40.263, 48.234,38.973, 47.772,37.851z" />;
  }
});

module.exports = SwitchOn;
