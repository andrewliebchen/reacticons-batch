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
    return <path d="M 40.089,44.334 L 3.666,7.908 L 7.908,3.666 L 44.334,40.092 L 40.089,44.334 Z M 39.00,30.516 L 18.057,9.57 C 18.039,9.381 18.00,9.195 18.00,9.00 C 18.00,5.688 20.688,3.00 24.00,3.00 C 27.312,3.00 30.00,5.688 30.00,9.00 C 30.00,9.411 29.958,9.813 29.877,10.20 C 35.238,12.489 39.00,17.805 39.00,24.00 L 39.00,30.516 Z M 24.00,39.00 C 21.069,39.00 18.639,36.897 18.114,34.122 C 19.695,33.432 21.738,33.00 24.00,33.00 C 24.201,33.00 24.372,33.048 24.57,33.054 L 28.431,36.915 C 27.33,38.16 25.791,39.00 24.00,39.00 Z M 24.00,42.00 C 27.072,42.00 29.847,41.406 31.968,40.455 L 34.71,43.194 C 31.71,44.313 28.032,45.00 24.00,45.00 C 14.061,45.00 6.00,40.971 6.00,36.00 C 6.00,34.164 7.113,32.46 9.00,31.038 L 9.00,24.00 C 9.00,22.068 9.402,20.244 10.065,18.552 L 21.633,30.12 C 16.14,30.669 12.00,33.09 12.00,36.00 C 12.00,39.312 17.373,42.00 24.00,42.00 Z" >;
  }
});

module.exports = SwitchOn;