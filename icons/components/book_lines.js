'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

var SwitchOn = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 45.363,4.032C 44.355,3.351, 43.185,3.00, 42.00,3.00 c-0.753,0.00-1.509,0.144-2.229,0.432l-15.00,6.00C 24.489,9.543, 24.258,9.729, 24.00,9.882c-0.258-0.153-0.489-0.339-0.771-0.45l-15.00-6.00 C 7.509,3.144, 6.753,3.00, 6.00,3.00C 4.818,3.00, 3.642,3.351, 2.637,4.032C 0.987,5.148,0.00,7.008,0.00,9.00l0.00,27.00 c0.00,2.451, 1.494,4.662, 3.771,5.571l 15.00,6.00 C 19.491,47.859, 20.247,48.00, 21.00,48.00c 1.05,0.00, 2.073-0.318, 3.00-0.858C 24.927,47.682, 25.95,48.00, 27.00,48.00c 0.753,0.00, 1.509-0.141, 2.229-0.429l 15.00-6.00 C 46.506,40.662, 48.00,38.451, 48.00,36.00L48.00,9.00 C 48.00,7.008, 47.013,5.148, 45.363,4.032z M 21.00,42.00l-15.00-6.00L6.00,9.00 l 15.00,6.00L21.00,42.00 z M 42.00,36.00l-15.00,6.00L27.00,15.00 l 15.00-6.00L42.00,36.00 z M 18.00,16.80L 9.00,13.20 l0.00,3.00 L 18.00,19.80L18.00,16.80 z M 18.00,22.80L 9.00,19.20l0.00,3.00 L 18.00,25.80L18.00,22.80 z M 18.00,28.80L 9.00,25.20l0.00,3.00 L 18.00,31.80L18.00,28.80 z M 18.00,34.80L 9.00,31.20l0.00,3.00 L 18.00,37.80L18.00,34.80 z M 39.00,31.20L 30.00,34.80l0.00,3.00 l 9.00-3.597 L39.00,31.20 z M 39.00,25.20L 30.00,28.80l0.00,3.00 L 39.00,28.20L39.00,25.20 z M 39.00,19.20L 30.00,22.80l0.00,3.00 L 39.00,22.20L39.00,19.20 z M 39.00,13.20L 30.00,16.80l0.00,3.00 L 39.00,16.20L39.00,13.20 z" />;
  }
});

module.exports = SwitchOn;
