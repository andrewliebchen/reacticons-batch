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
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.968, 43.971,48.00, 39.00,48.00z M 9.00,42.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,18.00 L6.00,18.00 l0.00,21.00 C 6.00,40.659, 7.341,42.00, 9.00,42.00z M 39.00,6.00L9.00,6.00 C 7.341,6.00, 6.00,7.344, 6.00,9.00l0.00,6.00 l36.00,0.00 L42.00,9.00 C 42.00,7.344, 40.659,6.00, 39.00,6.00z M 21.00,9.00l18.00,0.00 l0.00,3.00 L21.00,12.00 L21.00,9.00 z M 15.00,9.00l3.00,0.00 l0.00,3.00 L15.00,12.00 L15.00,9.00 z M 9.00,9.00l3.00,0.00 l0.00,3.00 L9.00,12.00 L9.00,9.00 z" >;
  }
});

module.exports = SwitchOn;
