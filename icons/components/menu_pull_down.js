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
    return <path d="M 9.00,21.00L 39.00,21.00L 39.00,24.00L 9.00,24.00zM 9.00,15.00L 39.00,15.00L 39.00,18.00L 9.00,18.00zM 39.00,0.00L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,30.00 c0.00,4.971, 4.029,9.00, 9.00,9.00l30.00,0.00 c 4.971,0.00, 9.00-4.029, 9.00-9.00L48.00,9.00 C 48.00,4.029, 43.971,0.00, 39.00,0.00z M 42.00,39.00c0.00,1.659-1.341,3.00-3.00,3.00L9.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L6.00,9.00 c0.00-1.656, 1.344-3.00, 3.00-3.00l30.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00L42.00,39.00 zM 9.00,9.00L 39.00,9.00L 39.00,12.00L 9.00,12.00zM 30.00,27.00 C 31.212,27.00 32.31,27.729 32.772,28.851 C 33.234,29.976 32.976,31.263 32.121,32.118 L 26.121,38.118 C 25.536,38.703 24.768,39.00 24.00,39.00 C 23.232,39.00 22.464,38.703 21.879,38.118 L 15.879,32.121 C 15.021,31.266 14.766,29.97 15.228,28.851 C 15.69,27.729 16.788,27.00 18.00,27.00 L 30.00,27.00 Z" >;
  }
});

module.exports = SwitchOn;
