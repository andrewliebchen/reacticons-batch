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
    return <path d="M 24.00,48.00c-13.254,0.00-24.00-10.746-24.00-24.00s 10.746-24.00, 24.00-24.00s 24.00,10.746, 24.00,24.00 S 37.254,48.00, 24.00,48.00z M 24.00,6.00C 14.061,6.00, 6.00,14.061, 6.00,24.00s 8.061,18.00, 18.00,18.00s 18.00-8.061, 18.00-18.00S 33.939,6.00, 24.00,6.00z M 32.484,32.484c-1.173,1.173-3.069,1.173-4.242,0.00 L 24.00,28.242l-4.242,4.242c-1.173,1.173-3.072,1.173-4.245,0.00s-1.173-3.069,0.00-4.242L 19.758,24.00L 15.513,19.758 c-1.173-1.173-1.173-3.072,0.00-4.245s 3.072-1.173, 4.245,0.00L 24.00,19.758l 4.242-4.245c 1.173-1.173, 3.069-1.173, 4.242,0.00s 1.173,3.072,0.00,4.245 L 28.242,24.00l 4.242,4.242C 33.657,29.415, 33.657,31.314, 32.484,32.484z" >;
  }
});

module.exports = SwitchOn;
