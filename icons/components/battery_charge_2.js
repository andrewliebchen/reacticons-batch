'use strict';

var React = require('react/addons');

var BatteryCharge2 = React.createClass({
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
    return <path d="M 48.00,27.00 L 48.00,27.00 L 48.00,21.00 L 48.00,21.00 L 48.00,18.00 L 45.00,18.00 C 45.00,13.029 40.971,9.00 36.00,9.00 L 26.415,9.00 L 26.994,6.144 L 24.897,9.00 L 9.00,9.00 C 4.029,9.00 0.00,13.029 0.00,18.00 L 0.00,30.00 C 0.00,34.971 4.029,39.00 9.00,39.00 L 21.357,39.00 L 20.697,42.045 L 22.929,39.00 L 36.00,39.00 C 40.971,39.00 45.00,34.971 45.00,30.00 L 45.00,30.00 L 48.00,30.00 L 48.00,27.00 Z M 9.00,15.00 L 20.499,15.00 L 11.775,26.901 L 23.985,26.901 L 22.662,33.00 L 9.00,33.00 C 7.341,33.00 6.00,31.659 6.00,30.00 L 6.00,18.00 C 6.00,16.344 7.341,15.00 9.00,15.00 Z M 39.00,18.00 L 39.00,30.00 C 39.00,31.659 37.659,33.00 36.00,33.00 L 27.324,33.00 L 36.132,20.979 L 23.985,20.979 L 25.197,15.00 L 36.00,15.00 C 37.659,15.00 39.00,16.344 39.00,18.00 Z" >;
  }
});

module.exports = BatteryCharge2;