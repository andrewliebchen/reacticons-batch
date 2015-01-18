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
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-3.912, 2.514-7.209, 6.00-8.448L6.00,4.50 C 6.00,6.987, 8.016,9.00, 10.50,9.00S 15.00,6.987, 15.00,4.50L15.00,0.00 l18.00,0.00 l0.00,4.50 C 33.00,6.987, 35.016,9.00, 37.50,9.00S 42.00,6.987, 42.00,4.50L42.00,0.552 C 45.486,1.791, 48.00,5.088, 48.00,9.00l0.00,30.00 C 48.00,43.968, 43.971,48.00, 39.00,48.00z M 42.00,15.00L6.00,15.00 l0.00,24.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,15.00 z M 9.00,30.00l30.00,0.00 l0.00,3.00 L9.00,33.00 L9.00,30.00 z M 9.00,24.00l30.00,0.00 l0.00,3.00 L9.00,27.00 L9.00,24.00 z M 9.00,18.00l30.00,0.00 l0.00,3.00 L9.00,21.00 L9.00,18.00 z M 24.00,39.00L9.00,39.00 l0.00,-3.00 l15.00,0.00 L24.00,39.00 z M 37.50,6.00C 36.672,6.00, 36.00,5.328, 36.00,4.50L36.00,0.00 l3.00,0.00 l0.00,4.50 C 39.00,5.328, 38.328,6.00, 37.50,6.00z M 10.50,6.00C 9.672,6.00, 9.00,5.328, 9.00,4.50L9.00,0.00 l3.00,0.00 l0.00,4.50 C 12.00,5.328, 11.328,6.00, 10.50,6.00z" >;
  }
});

module.exports = SwitchOn;