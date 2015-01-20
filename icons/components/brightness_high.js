'use strict';

var React = require('react/addons');
var IconMixin = require('../icon_mixin');

module.exports = React.createClass({
  mixins: [IconMixin],

  renderGraphic: function() {
    return <path d="M 45.00,27.00l-3.00,0.00 c-1.659,0.00-3.00-1.344-3.00-3.00s 1.341-3.00, 3.00-3.00l3.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00 S 46.659,27.00, 45.00,27.00z M 38.85,13.395c-1.173,1.17-3.072,1.17-4.245,0.00c-1.173-1.173-1.173-3.072,0.00-4.245l 2.124-2.121 c 1.17-1.173, 3.069-1.173, 4.242,0.00s 1.173,3.069,0.00,4.242L 38.85,13.395z M 24.00,36.00c-6.627,0.00-12.00-5.373-12.00-12.00s 5.373-12.00, 12.00-12.00s 12.00,5.373, 12.00,12.00 S 30.627,36.00, 24.00,36.00z M 24.00,18.00C 20.688,18.00, 18.00,20.688, 18.00,24.00s 2.688,6.00, 6.00,6.00s 6.00-2.688, 6.00-6.00S 27.312,18.00, 24.00,18.00z M 24.00,9.00C 22.341,9.00, 21.00,7.656, 21.00,6.00L21.00,3.00 c0.00-1.656, 1.341-3.00, 3.00-3.00 s 3.00,1.344, 3.00,3.00l0.00,3.00 C 27.00,7.656, 25.659,9.00, 24.00,9.00z M 9.153,13.395L 7.029,11.271c-1.173-1.173-1.173-3.069,0.00-4.242s 3.072-1.173, 4.245,0.00L 13.395,9.15 c 1.173,1.173, 1.173,3.072,0.00,4.245C 12.222,14.565, 10.32,14.565, 9.153,13.395z M 9.00,24.00c0.00,1.656-1.341,3.00-3.00,3.00L3.00,27.00 C 1.341,27.00,0.00,25.656,0.00,24.00s 1.341-3.00, 3.00-3.00 l3.00,0.00 C 7.659,21.00, 9.00,22.344, 9.00,24.00z M 9.153,34.605c 1.17-1.173, 3.069-1.173, 4.242,0.00s 1.173,3.069,0.00,4.242l-2.121,2.121 c-1.173,1.173-3.072,1.173-4.245,0.00c-1.173-1.17-1.173-3.069,0.00-4.242L 9.153,34.605z M 24.00,39.00c 1.659,0.00, 3.00,1.341, 3.00,3.00l0.00,3.00 c0.00,1.659-1.341,3.00-3.00,3.00 s-3.00-1.341-3.00-3.00l0.00,-3.00 C 21.00,40.341, 22.341,39.00, 24.00,39.00z M 38.85,34.605l 2.121,2.121c 1.173,1.173, 1.173,3.072,0.00,4.242 c-1.173,1.173-3.072,1.173-4.242,0.00l-2.124-2.121c-1.173-1.173-1.173-3.069,0.00-4.242S 37.68,33.435, 38.85,34.605z" />;
  }
});
