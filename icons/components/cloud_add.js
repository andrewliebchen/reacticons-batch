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
    return <path d="M 34.50,48.00C 27.045,48.00, 21.00,41.955, 21.00,34.50S 27.045,21.00, 34.50,21.00 S 48.00,27.045, 48.00,34.50S 41.955,48.00, 34.50,48.00z M 34.50,27.00C 30.357,27.00, 27.00,30.357, 27.00,34.50s 3.357,7.50, 7.50,7.50s 7.50-3.357, 7.50-7.50S 38.643,27.00, 34.50,27.00z M 36.00,39.00l-3.00,0.00 l0.00,-3.00 l-3.00,0.00 l0.00,-3.00 l3.00,0.00 l0.00,-3.00 l3.00,0.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 l-3.00,0.00 L36.00,39.00 zM 38.562,15.045 L 34.50,15.00 C 23.748,15.00 15.00,23.748 15.00,34.50 C 15.00,35.007 15.039,35.502 15.075,36.00 L 12.00,36.00 C 5.373,36.00 0.00,30.627 0.00,24.00 L 0.00,21.00 C 0.00,14.373 5.373,9.00 12.00,9.00 C 13.14,9.00 14.223,9.21 15.267,9.507 C 16.416,4.077 21.228,0.00 27.00,0.00 C 33.627,0.00 39.00,5.373 39.00,12.00 C 39.00,13.059 38.817,14.067 38.562,15.045 Z" >;
  }
});

module.exports = SwitchOn;