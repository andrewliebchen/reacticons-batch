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
    return <path d="M 0.00,3.00 L 48.00,3.00 L 48.00,9.00 L 0.00,9.00 L 0.00,3.00 Z M 36.00,15.00 L 36.00,21.00 L 0.00,21.00 L 0.00,15.00 L 36.00,15.00 Z M 0.00,33.00 L 0.00,27.00 L 42.00,27.00 L 42.00,33.00 L 0.00,33.00 Z M 0.00,45.00 L 0.00,39.00 L 30.00,39.00 L 30.00,45.00 L 0.00,45.00 Z" >;
  }
});

module.exports = SwitchOn;
