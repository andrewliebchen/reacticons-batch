'use strict';

var React = require('react/addons');

var BatteryCharge = React.createClass({
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
    return <path d="M 45.00,33.00l0.00,6.00 c0.00,1.659-1.341,3.00-3.00,3.00L3.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L0.00,12.00 c0.00-1.656, 1.344-3.00, 3.00-3.00l39.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,6.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,9.00 C 48.00,31.659, 46.659,33.00, 45.00,33.00z M 39.00,30.00L39.00,21.00 L39.00,18.00 c0.00-1.656-1.341-3.00-3.00-3.00L9.00,15.00 C 7.344,15.00, 6.00,16.344, 6.00,18.00l0.00,15.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l27.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L39.00,30.00 z M 33.00,33.00l-3.00,0.00 L27.00,33.00 l0.00,-3.00 L24.00,30.00 L24.00,27.00 L21.00,27.00 L21.00,24.00 l3.00,0.00 L24.00,21.00 l3.00,0.00 L27.00,18.00 l3.00,0.00 l3.00,0.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 l-3.00,0.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 l-3.00,0.00 L33.00,33.00 z M 9.00,24.00l9.00,0.00 l0.00,3.00 L9.00,27.00 L9.00,24.00 z" >;
  }
});

module.exports = BatteryCharge;