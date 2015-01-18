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
    return <path d="M 45.00,48.00L12.00,48.00 l0.00,-3.00 l33.00,0.00 L45.00,12.00 l3.00,0.00 l0.00,33.00 l0.00,3.00 L45.00,48.00 z M 45.00,9.00l-3.00,0.00 L42.00,6.00 l-3.00,0.00 l0.00,3.00 l-3.00,0.00 L36.00,3.00 l-3.00,0.00 l0.00,6.00 l-3.00,0.00 L30.00,6.00 L27.00,6.00 l0.00,3.00 L24.00,9.00 L24.00,6.00 L21.00,6.00 l0.00,3.00 L18.00,9.00 L18.00,6.00 L15.00,6.00 l0.00,3.00 L12.00,9.00 L12.00,0.00 l36.00,0.00 l0.00,6.00 l-3.00,0.00 L45.00,9.00 z M 6.00,48.00L0.00,48.00 L0.00,12.00 l9.00,0.00 l0.00,3.00 L6.00,15.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 L6.00,21.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 L6.00,27.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 L3.00,33.00 l0.00,3.00 l6.00,0.00 l0.00,3.00 L6.00,39.00 l0.00,3.00 l3.00,0.00 l0.00,3.00 L6.00,45.00 L6.00,48.00 z M0.00,0.00l9.00,0.00 l0.00,9.00 L0.00,9.00 L0.00,0.00 z" >;
  }
});

module.exports = SwitchOn;