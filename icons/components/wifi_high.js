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
    return <path d="M 43.092,22.908c-10.545-10.545-27.642-10.545-38.187,0.00L 0.666,18.666 c 12.888-12.888, 33.783-12.888, 46.671,0.00L 43.092,22.908z M 40.971,25.029l-4.245,4.245c-7.029-7.032-18.426-7.032-25.452,0.00L 7.029,25.029 C 16.401,15.657, 31.596,15.657, 40.971,25.029z M 34.605,31.395l-4.242,4.242c-3.513-3.516-9.21-3.516-12.726,0.00l-4.242-4.242 C 19.251,25.536, 28.749,25.536, 34.605,31.395z M 24.00,36.00c 3.312,0.00, 6.00,2.688, 6.00,6.00s-2.688,6.00-6.00,6.00s-6.00-2.688-6.00-6.00S 20.688,36.00, 24.00,36.00z" >;
  }
});

module.exports = SwitchOn;
