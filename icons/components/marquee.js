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
    return <path d="M 6.00,15.00 L 6.00,21.00 L 0.00,21.00 L 0.00,15.00 L 6.00,15.00 Z M 6.00,27.00 L 6.00,33.00 L 0.00,33.00 L 0.00,27.00 L 6.00,27.00 Z M 6.00,39.00 C 6.00,40.659 7.344,42.00 9.00,42.00 L 9.00,48.00 C 4.029,48.00 0.00,43.968 0.00,39.00 L 6.00,39.00 Z M 15.00,6.00 L 15.00,0.00 L 21.00,0.00 L 21.00,6.00 L 15.00,6.00 Z M 42.00,9.00 C 42.00,7.344 40.659,6.00 39.00,6.00 L 39.00,0.00 C 43.968,0.00 48.00,4.029 48.00,9.00 L 42.00,9.00 Z M 0.00,9.00 C 0.00,4.029 4.029,0.00 9.00,0.00 L 9.00,6.00 C 7.344,6.00 6.00,7.344 6.00,9.00 L 0.00,9.00 Z M 42.00,33.00 L 42.00,27.00 L 48.00,27.00 L 48.00,33.00 L 42.00,33.00 Z M 42.00,21.00 L 42.00,15.00 L 48.00,15.00 L 48.00,21.00 L 42.00,21.00 Z M 39.00,42.00 C 40.659,42.00 42.00,40.659 42.00,39.00 L 48.00,39.00 C 48.00,43.968 43.968,48.00 39.00,48.00 L 39.00,42.00 Z M 27.00,6.00 L 27.00,0.00 L 33.00,0.00 L 33.00,6.00 L 27.00,6.00 Z M 15.00,48.00 L 15.00,42.00 L 21.00,42.00 L 21.00,48.00 L 15.00,48.00 Z M 27.00,48.00 L 27.00,42.00 L 33.00,42.00 L 33.00,48.00 L 27.00,48.00 Z" >;
  }
});

module.exports = SwitchOn;
