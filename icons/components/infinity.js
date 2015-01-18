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
    return <path d="M 45.00,24.00c0.00,6.627-5.373,12.00-12.00,12.00s-12.00-5.373-12.00-12.00c0.00-3.312-2.688-6.00-6.00-6.00 S 9.00,20.688, 9.00,24.00s 2.688,6.00, 6.00,6.00c 0.366,0.00, 0.72-0.045, 1.068-0.108c 0.687,1.971, 1.698,3.765, 2.982,5.358C 17.781,35.706, 16.431,36.00, 15.00,36.00 c-6.627,0.00-12.00-5.373-12.00-12.00s 5.373-12.00, 12.00-12.00s 12.00,5.373, 12.00,12.00c0.00,3.312, 2.688,6.00, 6.00,6.00s 6.00-2.688, 6.00-6.00l0.00,0.00c0.00-3.312-2.688-6.00-6.00-6.00 c-0.366,0.00-0.72,0.045-1.068,0.108c-0.687-1.971-1.695-3.765-2.982-5.358C 30.219,12.294, 31.569,12.00, 33.00,12.00C 39.627,12.00, 45.00,17.373, 45.00,24.00L 45.00,24.00z" >;
  }
});

module.exports = SwitchOn;