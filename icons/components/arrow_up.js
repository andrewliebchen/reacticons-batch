'use strict';

var React = require('react/addons');

var ArrowUp = React.createClass({
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
    return <path d="M 24.00,0.00C 10.746,0.00,0.00,10.746,0.00,24.00s 10.746,24.00, 24.00,24.00s 24.00-10.746, 24.00-24.00S 37.254,0.00, 24.00,0.00z M 24.00,42.00c-9.939,0.00-18.00-8.061-18.00-18.00s 8.061-18.00, 18.00-18.00s 18.00,8.061, 18.00,18.00S 33.939,42.00, 24.00,42.00zM 26.121,12.876 L 32.121,18.876 C 32.976,19.734 33.234,21.024 32.772,22.149 C 32.31,23.268 31.212,24.00 30.00,24.00 L 27.00,24.00 L 27.00,33.00 C 27.00,34.659 25.659,36.00 24.00,36.00 C 22.341,36.00 21.00,34.659 21.00,33.00 L 21.00,24.00 L 18.00,24.00 C 16.788,24.00 15.69,23.268 15.228,22.149 C 14.766,21.027 15.021,19.734 15.879,18.876 L 21.879,12.876 C 22.464,12.291 23.232,11.997 24.00,11.997 C 24.768,11.997 25.536,12.291 26.121,12.876 Z" >;
  }
});

module.exports = ArrowUp;
