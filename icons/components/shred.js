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
    return <path d="M 45.00,36.00l-3.00,0.00 l0.00,-3.00 c0.00-3.312-2.688-6.00-6.00-6.00L12.00,27.00 c-3.312,0.00-6.00,2.688-6.00,6.00l0.00,3.00 L3.00,36.00 c-1.656,0.00-3.00-1.341-3.00-3.00L0.00,15.00 c0.00-1.656, 1.344-3.00, 3.00-3.00l6.00,0.00 L9.00,0.00 l30.00,0.00 l0.00,12.00 l6.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,18.00 C 48.00,34.659, 46.659,36.00, 45.00,36.00z M 36.00,3.00L12.00,3.00 l0.00,9.00 l24.00,0.00 L36.00,3.00 z M 36.00,18.00l-3.00,0.00 l0.00,3.00 l3.00,0.00 L36.00,18.00 z M 42.00,18.00l-3.00,0.00 l0.00,3.00 l3.00,0.00 L42.00,18.00 z M 9.00,48.00l0.00,-12.00 l0.00,0.00l0.00,0.00l0.00,-3.00 c0.00-1.659, 1.344-3.00, 3.00-3.00l24.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00l0.00,3.00 l-3.00,0.00 l0.00,6.00 l-3.00,0.00 l0.00,-6.00 l-3.00,0.00 l0.00,12.00 L27.00,48.00 l0.00,-12.00 L24.00,36.00 l0.00,9.00 L21.00,45.00 l0.00,-9.00 L18.00,36.00 l0.00,6.00 L15.00,42.00 l0.00,-6.00 L12.00,36.00 l0.00,12.00 L9.00,48.00 z" >;
  }
});

module.exports = SwitchOn;
