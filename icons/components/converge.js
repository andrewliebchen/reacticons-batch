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
    return <path d="M 45.00,0.00c-1.659,0.00-3.00,1.344-3.00,3.00l0.00,9.00 c0.00,1.656-1.341,3.00-3.00,3.00l-9.00,0.00 C 27.687,15.00, 25.593,15.90, 24.00,17.337C 22.404,15.90, 20.316,15.00, 18.00,15.00L9.00,15.00 C 7.344,15.00, 6.00,13.656, 6.00,12.00L6.00,3.00 c0.00-1.656-1.344-3.00-3.00-3.00S0.00,1.344,0.00,3.00l0.00,9.00 c0.00,4.971, 4.029,9.00, 9.00,9.00 l9.00,0.00 c 1.656,0.00, 3.00,1.344, 3.00,3.00l0.00,12.00 L18.00,36.00 c-1.212,0.00-2.31,0.732-2.772,1.851c-0.462,1.122-0.204,2.412, 0.651,3.27l 6.00,6.00C 22.464,47.706, 23.232,48.00, 24.00,48.00 s 1.536-0.294, 2.121-0.879l 6.00-6.00c 0.858-0.858, 1.113-2.148, 0.651-3.27C 32.31,36.732, 31.212,36.00, 30.00,36.00L27.00,36.00 L27.00,24.00 c0.00-1.656, 1.341-3.00, 3.00-3.00l9.00,0.00 c 4.971,0.00, 9.00-4.029, 9.00-9.00L48.00,3.00 C 48.00,1.344, 46.659,0.00, 45.00,0.00z" >;
  }
});

module.exports = SwitchOn;
