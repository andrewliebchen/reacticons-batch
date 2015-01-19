'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 39.00,48.00l-5.268,0.00 l 2.64-2.643c 0.966-0.972, 1.68-2.121, 2.115-3.357L39.00,42.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,18.00 L6.00,18.00 l0.00,21.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l0.51,0.00 c 0.438,1.242, 1.152,2.397, 2.124,3.369L 14.271,48.00L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.968, 43.971,48.00, 39.00,48.00z M 42.00,9.00c0.00-1.656-1.341-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,6.00 l36.00,0.00 L42.00,9.00 z M 12.00,12.00L9.00,12.00 L9.00,9.00 l3.00,0.00 L12.00,12.00 z M 18.00,12.00L15.00,12.00 L15.00,9.00 l3.00,0.00 L18.00,12.00 z M 39.00,12.00L21.00,12.00 L21.00,9.00 l18.00,0.00 L39.00,12.00 z M 18.00,36.00l3.00,0.00 L21.00,27.00 c0.00-1.656, 1.344-3.00, 3.00-3.00c 1.659,0.00, 3.00,1.341, 3.00,3.00l0.00,9.00 l3.00,0.00 c 1.212,0.00, 2.31,0.732, 2.772,1.851c 0.462,1.125, 0.204,2.415-0.651,3.27l-6.00,6.00C 25.536,47.706, 24.768,48.006, 24.00,48.006 s-1.536-0.30-2.121-0.885l-6.00-6.00c-0.858-0.855-1.113-2.151-0.651-3.27S 16.788,36.00, 18.00,36.00z" />;
  }
});

module.exports = SwitchOn;
