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
    return <path d="M 48.00,48.00l-6.00,0.00 l-3.00,0.00 l0.00,-6.00 l-6.00,0.00 l0.00,-6.00 L27.00,36.00 l0.00,-3.00 L21.00,33.00 l0.00,-3.00 L21.00,28.734 C 19.161,29.541, 17.136,30.00, 15.00,30.00 c-8.283,0.00-15.00-6.714-15.00-15.00s 6.717-15.00, 15.00-15.00s 15.00,6.714, 15.00,15.00c0.00,2.136-0.462,4.161-1.266,6.00L33.00,21.00 l0.00,3.00 l 15.00,12.00l0.00,3.00 l0.00,0.00L48.00,48.00 z M 12.00,6.00C 8.688,6.00, 6.00,8.688, 6.00,12.00 s 2.688,6.00, 6.00,6.00s 6.00-2.688, 6.00-6.00S 15.312,6.00, 12.00,6.00z" >;
  }
});

module.exports = SwitchOn;
