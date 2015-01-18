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
    return <path d="M 39.00,48.00l-3.00,0.00 l0.00,-18.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L39.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.968, 43.971,48.00, 39.00,48.00z M 33.00,30.00l0.00,18.00 L15.00,48.00 l0.00,-18.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L18.00,0.00 l12.00,0.00 l0.00,27.00 C 30.00,28.659, 31.341,30.00, 33.00,30.00z M 12.00,30.00l0.00,18.00 L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l0.00,27.00 C 9.00,28.659, 10.341,30.00, 12.00,30.00z" >;
  }
});

module.exports = SwitchOn;
