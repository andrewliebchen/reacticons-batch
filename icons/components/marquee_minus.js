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
    return <path d="M 42.00,27.00l6.00,0.00 l0.00,6.00 l-6.00,0.00 L42.00,27.00 z M 42.00,15.00l6.00,0.00 l0.00,6.00 l-6.00,0.00 L42.00,15.00 z M 39.00,6.00L39.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l-6.00,0.00 C 42.00,7.344, 40.659,6.00, 39.00,6.00z M 33.00,27.00L15.00,27.00 C 13.344,27.00, 12.00,25.659, 12.00,24.00c0.00-1.656, 1.344-3.00, 3.00-3.00l18.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00C 36.00,25.659, 34.659,27.00, 33.00,27.00z M 27.00,0.00l6.00,0.00 l0.00,6.00 L27.00,6.00 L27.00,0.00 z M 15.00,0.00l6.00,0.00 l0.00,6.00 L15.00,6.00 L15.00,0.00 z M0.00,39.00l6.00,0.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l0.00,6.00 C 4.029,48.00,0.00,43.971,0.00,39.00z M 6.00,9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l0.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00z M 6.00,21.00L0.00,21.00 L0.00,15.00 l6.00,0.00 L6.00,21.00 z M 6.00,33.00L0.00,33.00 L0.00,27.00 l6.00,0.00 L6.00,33.00 z M 21.00,48.00L15.00,48.00 l0.00,-6.00 l6.00,0.00 L21.00,48.00 z M 33.00,48.00L27.00,48.00 l0.00,-6.00 l6.00,0.00 L33.00,48.00 z M 42.00,39.00l6.00,0.00 c0.00,4.971-4.029,9.00-9.00,9.00l0.00,-6.00 C 40.659,42.00, 42.00,40.659, 42.00,39.00z" >;
  }
});

module.exports = SwitchOn;