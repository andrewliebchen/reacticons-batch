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
    return <path d="M 36.00,42.00c0.00,3.312-5.373,6.00-12.00,6.00s-12.00-2.688-12.00-6.00L 6.00,9.00c0.00-4.971, 8.061-9.00, 18.00-9.00 s 18.00,4.029, 18.00,9.00L 36.00,42.00z M 24.00,3.00C 17.373,3.00, 12.00,5.688, 12.00,9.00s 5.373,6.00, 12.00,6.00s 12.00-2.688, 12.00-6.00S 30.627,3.00, 24.00,3.00z" >;
  }
});

module.exports = SwitchOn;
