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
    return <path d="M 24.00,39.00c-18.00,0.00-24.00-15.00-24.00-15.00s 6.00-15.00, 24.00-15.00s 24.00,15.00, 24.00,15.00S 42.00,39.00, 24.00,39.00z M 24.00,15.00 C 19.029,15.00, 15.00,19.029, 15.00,24.00s 4.029,9.00, 9.00,9.00s 9.00-4.029, 9.00-9.00S 28.971,15.00, 24.00,15.00z M 24.00,30.00c-3.312,0.00-6.00-2.688-6.00-6.00l6.00,0.00 L 19.758,19.758C 20.841,18.672, 22.341,18.00, 24.00,18.00 c 3.312,0.00, 6.00,2.688, 6.00,6.00S 27.312,30.00, 24.00,30.00z" >;
  }
});

module.exports = SwitchOn;
