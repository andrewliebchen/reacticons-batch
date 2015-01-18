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
    return <path d="M 27.00,48.00l0.00,-6.00 l6.00,0.00 L33.00,6.00 L27.00,6.00 L27.00,0.00 l12.00,0.00 l0.00,6.00 l0.00,36.00 l0.00,3.00 l0.00,3.00 L27.00,48.00 z M 9.00,45.00l0.00,-3.00 L9.00,6.00 L9.00,0.00 l12.00,0.00 l0.00,6.00 L15.00,6.00 l0.00,36.00 l6.00,0.00 l0.00,6.00 L9.00,48.00 L9.00,45.00 z" >;
  }
});

module.exports = SwitchOn;
