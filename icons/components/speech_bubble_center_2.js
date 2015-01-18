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
    return <path d="M 39.00,39.00l-9.00,0.00 l-6.00,9.00l-6.00-9.00L9.00,39.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00 l30.00,0.00 c 4.968,0.00, 9.00,4.029, 9.00,9.00l0.00,21.00 C 48.00,34.968, 43.968,39.00, 39.00,39.00z M 42.00,9.00c0.00-1.656-1.341-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,21.00 c0.00,1.659, 1.344,3.00, 3.00,3.00 l10.998,0.00 L 24.00,39.00l 4.002-6.00L39.00,33.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,9.00 z M 12.00,18.00l24.00,0.00 l0.00,3.00 L12.00,21.00 L12.00,18.00 z M 12.00,12.00l24.00,0.00 l0.00,3.00 L12.00,15.00 L12.00,12.00 z M 24.00,27.00L12.00,27.00 L12.00,24.00 l12.00,0.00 L24.00,27.00 z" >;
  }
});

module.exports = SwitchOn;