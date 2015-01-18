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
    return <path d="M 46.242,10.245l-4.467,4.467l-8.616-8.352l 4.599-4.599 c 2.34-2.343, 6.141-2.343, 8.484,0.00C 48.585,4.101, 48.585,7.899, 46.242,10.245z M 39.159,17.325l-27.465,27.465L0.00,48.048l 3.207-11.739 l 27.363-27.363L 39.159,17.325z" >;
  }
});

module.exports = SwitchOn;
