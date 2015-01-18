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
    return <path d="M 44.463,23.787L 24.00,45.00L 3.537,23.787c-4.686-4.686-4.686-12.285,0.00-16.971 c 4.686-4.686, 12.285-4.686, 16.971,0.00L 24.00,11.061l 3.492-4.242c 4.686-4.686, 12.285-4.686, 16.971,0.00C 49.149,11.502, 49.149,19.101, 44.463,23.787z" >;
  }
});

module.exports = SwitchOn;
