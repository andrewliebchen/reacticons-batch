'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 39.00,48.00L9.00,48.00 c-1.659,0.00-3.00-1.341-3.00-3.00L6.00,3.00 c0.00-1.659, 1.341-3.00, 3.00-3.00l21.00,0.00 l 12.00,12.00l0.00,33.00 C 42.00,46.659, 40.659,48.00, 39.00,48.00z M 27.00,15.00L27.00,6.00 L12.00,6.00 l0.00,36.00 l24.00,0.00 L36.00,15.00 L27.00,15.00 z" />;
  }
});

module.exports = SwitchOn;
