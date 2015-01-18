'use strict';

var React = require('react/addons');

var AlignRightEdges = React.createClass({
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
    return <path d="M 33.00,27.00L15.00,27.00 c-1.656,0.00-3.00,1.341-3.00,3.00l0.00,3.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l18.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00l0.00,-3.00 C 36.00,28.341, 34.659,27.00, 33.00,27.00z M 33.00,33.00L15.00,33.00 l0.00,-3.00 l18.00,0.00 L33.00,33.00 z M 39.00,0.00L9.00,0.00 C 4.029,0.00,0.00,4.029,0.00,9.00l0.00,30.00 c0.00,4.971, 4.029,9.00, 9.00,9.00l30.00,0.00 c 4.968,0.00, 9.00-4.029, 9.00-9.00L48.00,9.00 C 48.00,4.029, 43.968,0.00, 39.00,0.00z M 42.00,39.00c0.00,1.659-1.341,3.00-3.00,3.00L9.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L6.00,9.00 c0.00-1.659, 1.344-3.00, 3.00-3.00l30.00,0.00 c 1.659,0.00, 3.00,1.341, 3.00,3.00L42.00,39.00 z M 33.00,12.00L27.00,12.00 C 25.344,12.00, 24.00,13.341, 24.00,15.00l0.00,3.00 c0.00,1.659, 1.344,3.00, 3.00,3.00l6.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L36.00,15.00 C 36.00,13.341, 34.659,12.00, 33.00,12.00z M 33.00,18.00L27.00,18.00 L27.00,15.00 l6.00,0.00 L33.00,18.00 z" >;
  }
});

module.exports = AlignRightEdges;
