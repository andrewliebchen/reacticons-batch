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
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l30.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.971, 43.971,48.00, 39.00,48.00z M 42.00,9.00c0.00-1.659-1.341-3.00-3.00-3.00L9.00,6.00 C 7.341,6.00, 6.00,7.341, 6.00,9.00l0.00,30.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,9.00 z M 33.00,30.00l-3.00,0.00 l0.00,0.00l0.00,9.00 L27.00,39.00 L27.00,27.00 L27.00,21.00 L27.00,9.00 l3.00,0.00 l0.00,9.00 l0.00,0.00l3.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00l0.00,6.00 C 36.00,28.659, 34.659,30.00, 33.00,30.00z M 33.00,21.00l-3.00,0.00 l0.00,6.00 l3.00,0.00 L33.00,21.00 z M 18.00,36.00 L15.00,36.00 l0.00,3.00 L12.00,39.00 l0.00,-6.00 L12.00,15.00 L12.00,9.00 l3.00,0.00 l0.00,3.00 l3.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00l0.00,18.00 C 21.00,34.659, 19.659,36.00, 18.00,36.00z M 18.00,15.00L15.00,15.00 l0.00,18.00 l3.00,0.00 L18.00,15.00 z" >;
  }
});

module.exports = SwitchOn;
