'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function(type) {
    return (
      <g>
        {type === 'alt' ?
          <path d="M 24.00,48.00l-6.00-18.00L0.00,24.00l 48.00-24.00L 24.00,48.00z M 24.00,36.00l 15.00-27.00L 21.00,27.00L 24.00,36.00z" />
        :
          <path d="M 36.00,48.00l-15.882-11.913L 42.00,6.00l-28.182,25.365L0.00,21.00l 48.00-21.00L 36.00,48.00z M 12.00,48.00l0.00,-12.00 l 9.00,6.00L 12.00,48.00z" />
        }
      </g>
    );
  }
});
