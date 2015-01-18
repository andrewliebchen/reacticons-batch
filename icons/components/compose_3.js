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
    return <path d="M 36.00,0.00L 15.00,21.00l-6.00,18.00l 18.00-6.00l 21.00-21.00L 36.00,0.00z M 15.00,33.00l 3.00-9.00l 6.00,6.00L 15.00,33.00z M 27.00,27.00L 21.00,21.00l 9.00-9.00 l 6.00,6.00L 27.00,27.00zM 42.00,26.484 L 48.00,20.484 L 48.00,39.00 C 48.00,43.971 43.971,48.00 39.00,48.00 L 9.00,48.00 C 4.029,48.00 0.00,43.971 0.00,39.00 L 0.00,9.00 C 0.00,4.029 4.029,0.00 9.00,0.00 L 27.516,0.00 L 21.516,6.00 L 9.00,6.00 C 7.341,6.00 6.00,7.341 6.00,9.00 L 6.00,39.00 C 6.00,40.659 7.341,42.00 9.00,42.00 L 39.00,42.00 C 40.659,42.00 42.00,40.659 42.00,39.00 L 42.00,26.484 Z" >;
  }
});

module.exports = SwitchOn;
