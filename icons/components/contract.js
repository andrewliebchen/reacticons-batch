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
    return <path d="M 48.00,39.00c0.00,4.971-4.029,9.00-9.00,9.00L9.00,48.00 c-4.971,0.00-9.00-4.029-9.00-9.00L0.00,12.00 L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l3.00,0.00 l27.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00L48.00,39.00 z M 15.00,9.00c0.00-1.656-1.344-3.00-3.00-3.00L9.00,6.00 C 7.344,6.00, 6.00,7.344, 6.00,9.00l0.00,3.00 c0.00,1.656, 1.344,3.00, 3.00,3.00l3.00,0.00 c 1.656,0.00, 3.00-1.344, 3.00-3.00L15.00,9.00 z M 42.00,37.665l-5.619-5.619l 2.103-2.049c 0.858-0.858, 1.116-2.586, 0.651-3.705C 38.67,25.17, 37.575,24.00, 36.363,24.00 L27.879,24.00 C 27.051,24.00, 25.86,24.774, 25.317,25.317C 24.777,25.857, 24.00,27.048, 24.00,27.876l0.00,8.484 c0.00,1.215, 1.173,2.307, 2.292,2.772s 2.631,0.207, 3.489-0.651 l 2.307-2.247L 37.851,42.00L9.00,42.00 c-1.656,0.00-3.00-1.341-3.00-3.00L6.00,21.00 l6.00,0.00 c 4.968,0.00, 9.00-4.029, 9.00-9.00L21.00,6.00 l18.00,0.00 c 1.659,0.00, 3.00,1.344, 3.00,3.00L42.00,37.665 z" >;
  }
});

module.exports = SwitchOn;
