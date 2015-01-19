'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 44.463,23.787L 24.00,45.00L 3.537,23.787c-4.686-4.686-4.686-12.285,0.00-16.971 c 4.686-4.686, 12.285-4.686, 16.971,0.00L 24.00,11.061l 3.492-4.242c 4.686-4.686, 12.285-4.686, 16.971,0.00C 49.149,11.502, 49.149,19.101, 44.463,23.787z M 24.00,36.516l 16.221-16.971c 2.34-2.343, 2.34-6.141,0.00-8.484c-2.343-2.343-6.144-2.343-8.487,0.00L 24.00,19.545L24.00,36.516 z" />;
  }
});

module.exports = SwitchOn;
