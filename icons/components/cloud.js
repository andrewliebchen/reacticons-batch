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
    return <path d="M0.00,27.00c0.00-6.627, 5.373-12.00, 12.00-12.00c 1.14,0.00, 2.223,0.21, 3.267,0.507 C 16.416,10.077, 21.228,6.00, 27.00,6.00c 6.627,0.00, 12.00,5.373, 12.00,12.00c0.00,1.059-0.183,2.067-0.438,3.045C 38.709,21.036, 38.85,21.00, 39.00,21.00c 4.971,0.00, 9.00,4.032, 9.00,9.00l0.00,0.00 l0.00,3.00 c0.00,4.971-4.029,9.00-9.00,9.00L12.00,42.00 c-6.627,0.00-12.00-5.373-12.00-12.00l0.00,0.00L0.00,27.00 z" >;
  }
});

module.exports = SwitchOn;