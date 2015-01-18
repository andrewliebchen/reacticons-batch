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
    return <path d="M 24.00,30.00c-3.312,0.00-6.00-2.688-6.00-6.00s 2.688-6.00, 6.00-6.00s 6.00,2.688, 6.00,6.00S 27.312,30.00, 24.00,30.00 z" >;
  }
});

module.exports = SwitchOn;
