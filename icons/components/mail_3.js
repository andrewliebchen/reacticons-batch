'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 48.00,30.00c0.00,3.312-2.688,6.00-6.00,6.00c 3.312,0.00, 6.00,2.688, 6.00,6.00s-2.688,6.00-6.00,6.00 s-6.00-2.688-6.00-6.00c0.00,3.312-2.688,6.00-6.00,6.00s-6.00-2.688-6.00-6.00c0.00,3.312-2.688,6.00-6.00,6.00s-6.00-2.688-6.00-6.00c0.00,3.312-2.688,6.00-6.00,6.00s-6.00-2.688-6.00-6.00s 2.688-6.00, 6.00-6.00 c-3.312,0.00-6.00-2.688-6.00-6.00s 2.688-6.00, 6.00-6.00C 2.688,24.00,0.00,21.312,0.00,18.00s 2.688-6.00, 6.00-6.00C 2.688,12.00,0.00,9.312,0.00,6.00s 2.688-6.00, 6.00-6.00s 6.00,2.688, 6.00,6.00 c0.00-3.312, 2.688-6.00, 6.00-6.00s 6.00,2.688, 6.00,6.00c0.00-3.312, 2.688-6.00, 6.00-6.00s 6.00,2.688, 6.00,6.00c0.00-3.312, 2.688-6.00, 6.00-6.00s 6.00,2.688, 6.00,6.00s-2.688,6.00-6.00,6.00 c 3.312,0.00, 6.00,2.688, 6.00,6.00s-2.688,6.00-6.00,6.00C 45.312,24.00, 48.00,26.688, 48.00,30.00z M 39.00,9.00L9.00,9.00 l0.00,30.00 l30.00,0.00 L39.00,9.00 z M 24.00,12.00c 6.627,0.00, 12.00,5.373, 12.00,12.00l0.00,4.50 c0.00,2.484-2.016,4.50-4.50,4.50c-2.268,0.00-4.125-1.686-4.437-3.867C 26.166,29.673, 25.125,30.00, 24.00,30.00c-3.312,0.00-6.00-2.688-6.00-6.00s 2.688-6.00, 6.00-6.00 s 6.00,2.688, 6.00,6.00l0.00,4.50 c0.00,0.828, 0.672,1.50, 1.50,1.50S 33.00,29.328, 33.00,28.50L33.00,24.00 c0.00-4.971-4.029-9.00-9.00-9.00C 19.032,15.00, 15.00,19.029, 15.00,24.00c0.00,4.971, 4.032,9.00, 9.00,9.00l1.50,0.00 C 26.328,33.00, 27.00,33.672, 27.00,34.50S 26.328,36.00, 25.50,36.00L24.00,36.00 c-6.627,0.00-12.00-5.373-12.00-12.00S 17.373,12.00, 24.00,12.00z M 24.00,21.00C 22.341,21.00, 21.00,22.341, 21.00,24.00s 1.341,3.00, 3.00,3.00s 3.00-1.341, 3.00-3.00 S 25.659,21.00, 24.00,21.00z" />;
  }
});
