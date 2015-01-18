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
    return <path d="M 39.00,6.00 C 43.971,6.00 48.00,10.029 48.00,15.00 L 48.00,27.00 C 48.00,31.971 43.971,36.00 39.00,36.00 L 12.00,36.00 L 12.00,39.00 C 12.00,40.212 11.268,41.31 10.149,41.772 C 9.027,42.234 7.737,41.976 6.879,41.121 L 0.879,35.121 C 0.294,34.536 0.00,33.768 0.00,33.00 C 0.00,32.232 0.294,31.464 0.879,30.879 L 6.879,24.879 C 7.737,24.021 9.027,23.766 10.149,24.228 C 11.268,24.69 12.00,25.788 12.00,27.00 L 12.00,30.00 L 39.00,30.00 C 40.659,30.00 42.00,28.659 42.00,27.00 L 42.00,15.00 C 42.00,13.344 40.659,12.00 39.00,12.00 L 15.00,12.00 C 13.344,12.00 12.00,10.656 12.00,9.00 C 12.00,7.344 13.344,6.00 15.00,6.00 L 39.00,6.00 Z" >;
  }
});

module.exports = SwitchOn;