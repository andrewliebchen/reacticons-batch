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
    return <path d="M 24.00,48.00c-13.254,0.00-24.00-10.746-24.00-24.00s 10.746-24.00, 24.00-24.00c 13.254,0.00, 24.00,10.746, 24.00,24.00 S 37.254,48.00, 24.00,48.00z M 24.00,6.00C 14.061,6.00, 6.00,14.061, 6.00,24.00s 8.061,18.00, 18.00,18.00s 18.00-8.061, 18.00-18.00S 33.939,6.00, 24.00,6.00z M 15.513,32.484 c-2.343-2.34, 1.899-10.383, 4.245-12.726c 2.343-2.343, 10.386-6.585, 12.726-4.242c 2.343,2.34-1.899,10.383-4.242,12.726 S 17.859,34.827, 15.513,32.484z M 30.363,17.637C 29.19,16.464, 23.052,20.706, 21.879,21.879l 4.242,4.242C 27.294,24.948, 31.536,18.81, 30.363,17.637z" >;
  }
});

module.exports = SwitchOn;
