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
    return <path d="M 12.00,30.00l24.00,0.00 l0.00,6.00 L12.00,36.00 L12.00,30.00 z M 12.00,21.00l24.00,0.00 l0.00,6.00 L12.00,27.00 L12.00,21.00 z M 12.00,12.00l24.00,0.00 l0.00,6.00 L12.00,18.00 L12.00,12.00 z" >;
  }
});

module.exports = SwitchOn;
