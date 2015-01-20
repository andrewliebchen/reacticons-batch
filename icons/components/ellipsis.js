'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 42.00,30.00c-3.312,0.00-6.00-2.688-6.00-6.00s 2.688-6.00, 6.00-6.00s 6.00,2.688, 6.00,6.00 S 45.312,30.00, 42.00,30.00z M 24.00,30.00c-3.312,0.00-6.00-2.688-6.00-6.00s 2.688-6.00, 6.00-6.00s 6.00,2.688, 6.00,6.00S 27.312,30.00, 24.00,30.00z M 6.00,30.00c-3.312,0.00-6.00-2.688-6.00-6.00s 2.688-6.00, 6.00-6.00 s 6.00,2.688, 6.00,6.00S 9.312,30.00, 6.00,30.00z" />;
  }
});
