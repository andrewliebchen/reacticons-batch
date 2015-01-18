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
    return <path d="M 24.00,48.00c-13.254,0.00-24.00-10.746-24.00-24.00s 10.746-24.00, 24.00-24.00c 13.254,0.00, 24.00,10.746, 24.00,24.00 S 37.254,48.00, 24.00,48.00z M 24.00,6.00C 14.061,6.00, 6.00,14.061, 6.00,24.00c0.00,9.942, 8.061,18.00, 18.00,18.00s 18.00-8.058, 18.00-18.00C 42.00,14.061, 33.939,6.00, 24.00,6.00z M 24.00,39.00 c-3.231,0.00-6.204-1.044-8.655-2.784C 15.129,35.688, 15.00,35.109, 15.00,34.50l0.00,0.00c 0.462-2.751, 2.313-5.064, 4.671-6.366C 18.639,27.06, 18.00,25.605, 18.00,24.00L18.00,21.00 c0.00-3.312, 2.688-6.00, 6.00-6.00s 6.00,2.688, 6.00,6.00l0.00,3.00 c0.00,1.605-0.639,3.06-1.668,4.134C 30.687,29.436, 32.538,31.749, 33.00,34.50l0.00,0.00 c0.00,0.609-0.129,1.188-0.345,1.716C 30.204,37.956, 27.231,39.00, 24.00,39.00z" >;
  }
});

module.exports = SwitchOn;
