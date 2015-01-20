'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 47.772,19.851C 47.31,18.732, 46.212,18.00, 45.00,18.00l-3.00,0.00 L42.00,15.00 c0.00-4.971-4.029-9.00-9.00-9.00L15.00,6.00 C 10.935,6.00, 7.536,8.715, 6.423,12.42C 7.251,12.171, 8.109,12.00, 9.00,12.00c 1.362,0.00, 2.667,0.333, 3.861,0.903 C 13.407,12.348, 14.16,12.00, 15.00,12.00l18.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,3.00 l-3.00,0.00 c-1.212,0.00-2.31,0.732-2.772,1.851c-0.462,1.122-0.207,2.412, 0.651,3.27l 6.00,6.00 C 37.464,29.706, 38.232,30.00, 39.00,30.00s 1.536-0.294, 2.121-0.879l 6.00-6.00C 47.979,22.263, 48.237,20.973, 47.772,19.851zM 35.139,35.097C 34.593,35.652, 33.84,36.00, 33.00,36.00L15.00,36.00 c-1.656,0.00-3.00-1.341-3.00-3.00l0.00,-3.00 l3.00,0.00 c 1.212,0.00, 2.31-0.732, 2.772-1.851c 0.465-1.122, 0.207-2.412-0.651-3.27l-6.00-6.00C 10.536,18.294, 9.768,18.00, 9.00,18.00 S 7.464,18.294, 6.879,18.879l-6.00,6.00c-0.858,0.858-1.113,2.148-0.651,3.27C 0.69,29.268, 1.788,30.00, 3.00,30.00l3.00,0.00 l0.00,3.00 c0.00,4.971, 4.029,9.00, 9.00,9.00l18.00,0.00 c 4.068,0.00, 7.464-2.715, 8.577-6.42C 40.749,35.829, 39.891,36.00, 39.00,36.00C 37.638,36.00, 36.333,35.67, 35.139,35.097z" />;
  }
});
