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
    return <path d="M 39.00,48.00L9.00,48.00 c-4.971,0.00-9.00-4.032-9.00-9.00L0.00,9.00 c0.00-4.971, 4.029-9.00, 9.00-9.00l1.674,0.00 C 8.88,1.989, 7.554,4.374, 6.789,7.014C 6.312,7.545, 6.00,8.232, 6.00,9.00l0.00,30.00 c0.00,1.659, 1.341,3.00, 3.00,3.00l30.00,0.00 c 1.659,0.00, 3.00-1.341, 3.00-3.00L42.00,9.00 c0.00-0.768-0.312-1.455-0.789-1.986C 40.446,4.374, 39.12,1.989, 37.329,0.00L39.00,0.00 c 4.971,0.00, 9.00,4.029, 9.00,9.00l0.00,30.00 C 48.00,43.968, 43.971,48.00, 39.00,48.00z M 12.00,12.00 c0.00-6.627, 5.373-12.00, 12.00-12.00s 12.00,5.373, 12.00,12.00s-12.00,24.00-12.00,24.00S 12.00,18.627, 12.00,12.00z M 30.00,12.00c0.00-3.312-2.688-6.00-6.00-6.00S 18.00,8.688, 18.00,12.00s 2.688,6.00, 6.00,6.00S 30.00,15.312, 30.00,12.00z" >;
  }
});

module.exports = SwitchOn;