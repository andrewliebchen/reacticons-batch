'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function(type) {
    return (
      <g>
        {type === 'alt' ?
          <path d="M 46.599,46.599c-1.758,1.758-4.605,1.758-6.363,0.00l-7.941-7.941 C 29.028,40.749, 25.167,42.00, 21.00,42.00c-11.598,0.00-21.00-9.402-21.00-21.00s 9.402-21.00, 21.00-21.00s 21.00,9.402, 21.00,21.00c0.00,4.167-1.251,8.028-3.342,11.295l 7.941,7.941 C 48.357,41.994, 48.357,44.841, 46.599,46.599z M 21.00,6.00C 12.717,6.00, 6.00,12.714, 6.00,21.00s 6.717,15.00, 15.00,15.00c 8.286,0.00, 15.00-6.714, 15.00-15.00S 29.286,6.00, 21.00,6.00z" />
        :
          <path d="M 46.599,40.236l-10.545-10.545C 37.89,26.718, 39.00,23.25, 39.00,19.50 C 39.00,8.73, 30.27,0.00, 19.50,0.00S0.00,8.73,0.00,19.50S 8.73,39.00, 19.50,39.00c 3.75,0.00, 7.218-1.11, 10.188-2.943l 10.548,10.545c 1.758,1.758, 4.605,1.758, 6.363,0.00 S 48.357,41.994, 46.599,40.236z M 19.50,33.00C 12.045,33.00, 6.00,26.955, 6.00,19.50S 12.045,6.00, 19.50,6.00S 33.00,12.045, 33.00,19.50S 26.955,33.00, 19.50,33.00z" />
        }
      </g>
    );
  }
});
