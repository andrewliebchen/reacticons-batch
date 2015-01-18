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
    return <path d="M 39.00,39.00l-9.00,0.00 l-6.00,9.00l-6.00-9.00L9.00,39.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00 l30.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,21.00 C 48.00,34.968, 43.971,39.00, 39.00,39.00z M 9.00,30.00l15.00,0.00 L24.00,27.00 L9.00,27.00 L9.00,30.00 z M 39.00,9.00L9.00,9.00 l0.00,3.00 l30.00,0.00 L39.00,9.00 z M 39.00,15.00L9.00,15.00 l0.00,3.00 l30.00,0.00 L39.00,15.00 z M 39.00,21.00L9.00,21.00 l0.00,3.00 l30.00,0.00 L39.00,21.00 z" >;
  }
});

module.exports = SwitchOn;
