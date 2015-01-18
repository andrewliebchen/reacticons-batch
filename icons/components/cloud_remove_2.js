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
    return <path d="M 39.00,21.00c-0.15,0.00-0.291,0.036-0.438,0.045 C 38.817,20.067, 39.00,19.059, 39.00,18.00c0.00-6.627-5.373-12.00-12.00-12.00C 21.228,6.00, 16.416,10.077, 15.267,15.507C 14.22,15.21, 13.143,15.00, 12.00,15.00C 5.373,15.00,0.00,20.373,0.00,27.00l0.00,3.00 c0.00,6.627, 5.373,12.00, 12.00,12.00l27.00,0.00 c 4.971,0.00, 9.00-4.029, 9.00-9.00l0.00,-3.00 C 48.00,25.032, 43.971,21.00, 39.00,21.00z M 25.50,36.00C 21.357,36.00, 18.00,32.643, 18.00,28.50S 21.357,21.00, 25.50,21.00 S 33.00,24.357, 33.00,28.50S 29.643,36.00, 25.50,36.00z M 21.00,30.00l9.00,0.00 L30.00,27.00 L21.00,27.00 L21.00,30.00 z" >;
  }
});

module.exports = SwitchOn;
