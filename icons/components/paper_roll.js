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
    return <path d="M 36.00,24.00c-2.196,0.00-4.23-0.633-6.00-1.665L30.00,42.00 l0.00,6.00 L24.00,48.00 L6.00,48.00 L0.00,48.00 l0.00,-6.00 L0.00,12.00 c0.00-6.627, 5.373-12.00, 12.00-12.00l24.00,0.00 l0.00,0.00c 6.627,0.00, 12.00,5.373, 12.00,12.00S 42.627,24.00, 36.00,24.00z M 12.00,6.00C 8.688,6.00, 6.00,8.688, 6.00,12.00l0.00,0.00l0.00,30.00 l18.00,0.00 L24.00,12.00 c0.00-2.196, 0.633-4.227, 1.665-6.00L12.00,6.00 z M 36.00,6.00c-3.312,0.00-6.00,2.688-6.00,6.00s 2.688,6.00, 6.00,6.00s 6.00-2.688, 6.00-6.00S 39.312,6.00, 36.00,6.00z M 9.00,36.00l12.00,0.00 l0.00,3.00 L9.00,39.00 L9.00,36.00 z M 9.00,27.00l12.00,0.00 l0.00,3.00 L9.00,30.00 L9.00,27.00 z M 9.00,18.00l12.00,0.00 l0.00,3.00 L9.00,21.00 L9.00,18.00 z M 9.00,9.00l12.00,0.00 l0.00,3.00 L9.00,12.00 L9.00,9.00 z" >;
  }
});

module.exports = SwitchOn;
