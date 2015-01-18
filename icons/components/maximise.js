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
    return <path d="M 45.00,0.00 C 46.659,0.00 48.00,1.344 48.00,3.00 L 48.00,12.00 C 48.00,13.212 47.268,14.307 46.149,14.772 C 45.777,14.925 45.387,15.00 45.00,15.00 C 44.22,15.00 43.452,14.694 42.879,14.121 L 40.50,11.742 L 32.121,20.121 C 30.948,21.294 29.052,21.294 27.879,20.121 C 26.706,18.948 26.706,17.052 27.879,15.879 L 36.258,7.50 L 33.879,5.121 C 33.021,4.263 32.766,2.973 33.228,1.851 C 33.69,0.732 34.788,0.00 36.00,0.00 L 45.00,0.00 Z M 15.879,27.879 C 17.052,26.706 18.948,26.706 20.121,27.879 C 21.294,29.052 21.294,30.948 20.121,32.121 L 11.742,40.50 L 14.121,42.879 C 14.979,43.737 15.237,45.027 14.772,46.149 C 14.307,47.268 13.212,48.00 12.00,48.00 L 3.00,48.00 C 1.344,48.00 0.00,46.659 0.00,45.00 L 0.00,36.00 C 0.00,34.788 0.732,33.69 1.851,33.228 C 2.223,33.075 2.613,33.00 3.00,33.00 C 3.78,33.00 4.548,33.306 5.121,33.879 L 7.50,36.258 L 15.879,27.879 Z" >;
  }
});

module.exports = SwitchOn;