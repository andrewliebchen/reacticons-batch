'use strict';

var React = require('react/addons');

var SwitchOn = React.createClass({
  propTypes: {
    size: React.PropTypes.number,
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      size: 48,
      className: "reacticon"
    };
  },

  render: function() {
    return (
      <svg version="1.1"
        width={this.props.size + 'px'}
        height={this.props.size + 'px'}
        className={this.props.className}
        viewBox="0 0 48 48">
        {this.renderGraphic()}
      </svg>
    );
  },

  renderGraphic: function() {
    return <path d="M 48.00,34.50c0.00,7.455-6.045,13.50-13.50,13.50l0.00,0.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l12.00,0.00 c 3.912,0.00, 7.209,2.511, 8.448,6.00L39.00,6.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00L48.00,34.50 L 48.00,34.50z M 34.497,42.00L 34.497,42.00 C 38.643,42.00, 42.00,38.643, 42.00,34.50l0.00,0.00c0.00-4.143-3.357-7.50-7.50-7.50S 27.00,30.357, 27.00,34.50S 30.357,42.00, 34.497,42.00z M 39.00,12.00L24.00,12.00 L24.00,9.00 c0.00-1.656-1.344-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,30.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l14.28,0.00 C 21.843,39.855, 21.00,37.278, 21.00,34.50C 21.00,27.045, 27.045,21.00, 34.50,21.00 c 2.778,0.00, 5.355,0.843, 7.50,2.28L42.00,15.00 C 42.00,13.344, 40.659,12.00, 39.00,12.00z M 33.00,30.00l3.00,0.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 l-3.00,0.00 l0.00,3.00 l-3.00,0.00 l0.00,-3.00 l-3.00,0.00 l0.00,-3.00 l3.00,0.00 L33.00,30.00 z" >;
  }
});

module.exports = SwitchOn;
