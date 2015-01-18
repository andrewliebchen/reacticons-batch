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
    return <path d="M 24.00,48.00c-13.254,0.00-24.00-10.746-24.00-24.00s 10.746-24.00, 24.00-24.00c 13.254,0.00, 24.00,10.746, 24.00,24.00 S 37.254,48.00, 24.00,48.00z M 24.00,42.00c 3.885,0.00, 7.461-1.26, 10.404-3.354l-25.05-25.05C 7.26,16.539, 6.00,20.115, 6.00,24.00C 6.00,33.939, 14.061,42.00, 24.00,42.00z M 24.00,6.00 C 20.115,6.00, 16.539,7.26, 13.596,9.354l 25.05,25.05C 40.74,31.461, 42.00,27.888, 42.00,24.00C 42.00,14.061, 33.939,6.00, 24.00,6.00z" >;
  }
});

module.exports = SwitchOn;
