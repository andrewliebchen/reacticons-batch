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
    return <path d="M 45.363,32.634L 33.00,20.271L33.00,6.00 c 1.659,0.00, 3.00-1.344, 3.00-3.00s-1.341-3.00-3.00-3.00L15.00,0.00 C 13.344,0.00, 12.00,1.344, 12.00,3.00s 1.344,3.00, 3.00,3.00l0.00,14.271 l-12.366,12.363c-3.513,3.516-3.513,9.213,0.00,12.729C 4.392,47.121, 6.696,48.00, 9.00,48.00l30.00,0.00 c 2.304,0.00, 4.605-0.879, 6.363-2.637C 48.879,41.847, 48.879,36.15, 45.363,32.634z M 41.121,41.121C 40.356,41.886, 39.462,42.00, 39.00,42.00L9.00,42.00 c-0.465,0.00-1.356-0.114-2.124-0.879c-1.17-1.17-1.17-3.075,0.00-4.245L 21.00,22.758L21.00,6.00 l6.00,0.00 l0.00,16.758 l 14.121,14.118 C 41.886,37.641, 42.00,38.535, 42.00,38.997C 42.00,39.462, 41.886,40.356, 41.121,41.121z" >;
  }
});

module.exports = SwitchOn;
