'use strict';

var React = require('react/addons');

var ArrowRight = React.createClass({
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
    return <path d="M 24.00,0.00C 10.746,0.00,0.00,10.746,0.00,24.00s 10.746,24.00, 24.00,24.00s 24.00-10.746, 24.00-24.00S 37.254,0.00, 24.00,0.00z M 24.00,6.00c 9.939,0.00, 18.00,8.061, 18.00,18.00s-8.061,18.00-18.00,18.00s-18.00-8.061-18.00-18.00S 14.061,6.00, 24.00,6.00zM 35.124,21.879C 35.709,22.464, 36.003,23.232, 36.003,24.00 s-0.294,1.536-0.879,2.121l-6.00,6.00c-0.858,0.858-2.151,1.113-3.273,0.651C 24.732,32.31, 24.00,31.212, 24.00,30.00L24.00,27.00 L15.00,27.00 C 13.341,27.00, 12.00,25.659, 12.00,24.00 s 1.341-3.00, 3.00-3.00l9.00,0.00 L24.00,18.00 c0.00-1.212, 0.732-2.31, 1.851-2.772c 1.125-0.462, 2.415-0.204, 3.273,0.651L 35.124,21.879z" >;
  }
});

module.exports = ArrowRight;