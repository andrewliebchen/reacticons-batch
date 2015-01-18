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
    return <path d="M 42.00,3.00l-6.00,0.00 l0.00,6.00 l3.00,0.00 l0.00,33.00 L9.00,42.00 L9.00,9.00 l3.00,0.00 L12.00,3.00 L6.00,3.00 C 4.341,3.00, 3.00,4.344, 3.00,6.00l0.00,39.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l36.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L45.00,6.00 C 45.00,4.344, 43.659,3.00, 42.00,3.00z M 18.00,12.00l12.00,0.00 c 1.659,0.00, 3.00-1.344, 3.00-3.00L33.00,3.00 L27.00,3.00 L27.00,0.00 L21.00,0.00 l0.00,3.00 L15.00,3.00 l0.00,6.00 C 15.00,10.656, 16.341,12.00, 18.00,12.00z M 21.00,6.00l6.00,0.00 l0.00,3.00 L21.00,9.00 L21.00,6.00 z M 12.00,39.00l24.00,0.00 L36.00,12.00 l-3.00,0.00 c0.00,1.656-1.341,3.00-3.00,3.00L18.00,15.00 C 16.341,15.00, 15.00,13.656, 15.00,12.00L12.00,12.00 L12.00,39.00 z M 15.00,18.00l18.00,0.00 l0.00,3.00 L15.00,21.00 L15.00,18.00 z M 15.00,24.00l12.00,0.00 l0.00,3.00 L15.00,27.00 L15.00,24.00 z M 15.00,30.00l15.00,0.00 l0.00,3.00 L15.00,33.00 L15.00,30.00 z" >;
  }
});

module.exports = SwitchOn;