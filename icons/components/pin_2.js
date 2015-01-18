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
    return <path d="M 24.00,0.00C 14.061,0.00, 6.00,8.061, 6.00,18.00s 18.00,30.00, 18.00,30.00s 18.00-20.061, 18.00-30.00S 33.939,0.00, 24.00,0.00z M 24.00,30.00c-6.627,0.00-12.00-5.373-12.00-12.00s 5.373-12.00, 12.00-12.00s 12.00,5.373, 12.00,12.00S 30.627,30.00, 24.00,30.00z M 24.00,12.00C 20.688,12.00, 18.00,14.688, 18.00,18.00s 2.688,6.00, 6.00,6.00s 6.00-2.688, 6.00-6.00 S 27.312,12.00, 24.00,12.00z" >;
  }
});

module.exports = SwitchOn;
