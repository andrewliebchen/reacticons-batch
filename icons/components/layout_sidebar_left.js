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
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.971, 43.968,48.00, 39.00,48.00z M 42.00,39.00L42.00,18.00 L18.00,18.00 l0.00,24.00 l21.00,0.00 C 40.659,42.00, 42.00,40.659, 42.00,39.00z M 9.00,42.00l6.00,0.00 L15.00,18.00 L6.00,18.00 l0.00,21.00 C 6.00,40.659, 7.344,42.00, 9.00,42.00z M 39.00,6.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,6.00 l9.00,0.00 l3.00,0.00 l24.00,0.00 L42.00,9.00 C 42.00,7.344, 40.659,6.00, 39.00,6.00z" >;
  }
});

module.exports = SwitchOn;