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
    return <path d="M 15.00,24.00l3.00,0.00 L18.00,21.00 L15.00,21.00 L15.00,24.00 z M 12.00,12.00l0.00,3.00 l3.00,0.00 L15.00,12.00 L12.00,12.00 z M 12.00,27.00l3.00,0.00 L15.00,24.00 L12.00,24.00 L12.00,27.00 z M 21.00,18.00L18.00,18.00 l0.00,3.00 l3.00,0.00 L21.00,18.00 z M 39.00,0.00 L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,30.00 c0.00,4.968, 4.029,9.00, 9.00,9.00l30.00,0.00 c 4.968,0.00, 9.00-4.032, 9.00-9.00L48.00,9.00 C 48.00,4.029, 43.968,0.00, 39.00,0.00z M 42.00,39.00c0.00,1.659-1.341,3.00-3.00,3.00L9.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L6.00,9.00 c0.00-1.656, 1.344-3.00, 3.00-3.00l30.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00L42.00,39.00 z M 15.00,15.00l0.00,3.00 l3.00,0.00 L18.00,15.00 L15.00,15.00 z M 21.00,27.00l9.00,0.00 L30.00,24.00 L21.00,24.00 L21.00,27.00 z" >;
  }
});

module.exports = SwitchOn;
