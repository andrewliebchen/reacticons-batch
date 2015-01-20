'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 34.605,31.395l-4.242,4.242c-3.513-3.516-9.21-3.516-12.726,0.00 l-4.242-4.242C 19.251,25.536, 28.749,25.536, 34.605,31.395z M 24.00,36.00c 3.312,0.00, 6.00,2.688, 6.00,6.00s-2.688,6.00-6.00,6.00s-6.00-2.688-6.00-6.00S 20.688,36.00, 24.00,36.00z" />;
  }
});
