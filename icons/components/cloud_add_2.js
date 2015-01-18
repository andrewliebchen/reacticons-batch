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
    return <path d="M 39.00,42.00L12.00,42.00 c-6.627,0.00-12.00-5.373-12.00-12.00L0.00,27.00 c0.00-6.627, 5.373-12.00, 12.00-12.00 c 1.14,0.00, 2.223,0.21, 3.267,0.507C 16.416,10.077, 21.228,6.00, 27.00,6.00c 6.627,0.00, 12.00,5.373, 12.00,12.00c0.00,1.059-0.183,2.067-0.438,3.045 C 38.709,21.036, 38.85,21.00, 39.00,21.00c 4.971,0.00, 9.00,4.032, 9.00,9.00l0.00,3.00 C 48.00,37.971, 43.971,42.00, 39.00,42.00z M 25.50,21.00C 21.357,21.00, 18.00,24.357, 18.00,28.50S 21.357,36.00, 25.50,36.00 S 33.00,32.643, 33.00,28.50S 29.643,21.00, 25.50,21.00z M 27.00,33.00L24.00,33.00 l0.00,-3.00 L21.00,30.00 L21.00,27.00 l3.00,0.00 L24.00,24.00 l3.00,0.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 L27.00,30.00 L27.00,33.00 z" >;
  }
});

module.exports = SwitchOn;
