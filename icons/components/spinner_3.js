'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 24.00,0.00C 10.746,0.00,0.00,10.746,0.00,24.00s 10.746,24.00, 24.00,24.00c 13.254,0.00, 24.00-10.746, 24.00-24.00 S 37.254,0.00, 24.00,0.00z M 24.00,36.00c-6.627,0.00-12.00-5.373-12.00-12.00s 5.373-12.00, 12.00-12.00s 12.00,5.373, 12.00,12.00S 30.627,36.00, 24.00,36.00z" />;
  }
});
