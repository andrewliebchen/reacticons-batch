'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 39.00,3.00c0.00-1.659, 1.341-3.00, 3.00-3.00s 3.00,1.341, 3.00,3.00l0.00,24.00 c0.00,11.598-9.402,21.00-21.00,21.00 s-21.00-9.402-21.00-21.00L3.00,15.00 c0.00-8.286, 6.714-15.00, 15.00-15.00s 15.00,6.714, 15.00,15.00l0.00,9.00 c0.00,4.971-4.029,9.00-9.00,9.00S 15.00,28.971, 15.00,24.00L15.00,15.00 c0.00-1.659, 1.341-3.00, 3.00-3.00s 3.00,1.341, 3.00,3.00l0.00,9.00 c0.00,1.659, 1.341,3.00, 3.00,3.00s 3.00-1.341, 3.00-3.00L27.00,15.00 c0.00-4.971-4.029-9.00-9.00-9.00S 9.00,10.029, 9.00,15.00l0.00,12.00 c0.00,8.286, 6.714,15.00, 15.00,15.00s 15.00-6.714, 15.00-15.00L39.00,3.00 z" />;
  }
});
