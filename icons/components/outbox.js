'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 9.00,39.00 L 15.00,30.00 L 33.00,30.00 L 39.00,39.00 ZM 18.00,12.00 C 16.788,12.00 15.69,11.268 15.228,10.149 C 15.114,9.867 15.042,9.576 15.015,9.285 C 14.931,8.406 15.234,7.521 15.879,6.876 L 21.879,0.876 C 22.464,0.291 23.232-0.003 24.00-0.003 C 24.768-0.003 25.536,0.291 26.121,0.876 L 32.121,6.876 C 32.763,7.521 33.066,8.409 32.985,9.285 C 32.958,9.576 32.889,9.867 32.772,10.149 C 32.31,11.268 31.212,12.00 30.00,12.00 L 27.00,12.00 L 27.00,21.00 C 27.00,22.659 25.659,24.00 24.00,24.00 C 22.344,24.00 21.00,22.659 21.00,21.00 L 21.00,12.00 L 18.00,12.00 ZM 39.00,0.00 C 43.971,0.00 48.00,4.029 48.00,9.00 L 48.00,39.00 C 48.00,43.971 43.971,48.00 39.00,48.00 L 9.00,48.00 C 4.029,48.00 0.00,43.971 0.00,39.00 L 0.00,9.00 C 0.00,4.029 4.029,0.00 9.00,0.00 L 14.271,0.00 L 11.634,2.634 C 10.662,3.606 9.948,4.758 9.51,6.00 L 9.00,6.00 C 7.344,6.00 6.00,7.344 6.00,9.00 L 6.00,39.00 C 6.00,40.659 7.344,42.00 9.00,42.00 L 39.00,42.00 C 40.659,42.00 42.00,40.659 42.00,39.00 L 42.00,9.00 C 42.00,7.344 40.659,6.00 39.00,6.00 L 38.487,6.00 C 38.049,4.761 37.335,3.609 36.363,2.634 L 33.729,0.00 L 39.00,0.00 Z" />;
  }
});
