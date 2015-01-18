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
    return <path d="M 45.438,19.533l-4.437,4.431c-2.766,2.766-6.873,3.321-10.212,1.731 l 10.212-10.215c 1.173-1.173, 1.173-3.072,0.00-4.242L 36.762,6.99c-1.173-1.173-3.069-1.173-4.242,0.00L 22.305,17.208 C 20.715,13.866, 21.27,9.759, 24.036,6.99l 4.428-4.431c 3.516-3.513, 9.216-3.513, 12.726,0.00l 4.248,4.242 C 48.948,10.317, 48.948,16.017, 45.438,19.533z M 15.552,32.445c-1.173-1.173-1.173-3.069,0.00-4.242l 12.726-12.726 c 1.173-1.173, 3.069-1.173, 4.242,0.00s 1.173,3.069,0.00,4.242l-12.726,12.726C 18.624,33.618, 16.722,33.618, 15.552,32.445z M 7.065,36.69 l 4.242,4.242c 1.173,1.173, 3.069,1.173, 4.242,0.00l 10.218-10.218c 1.59,3.342, 1.035,7.449-1.731,10.218l-4.056,4.431 c-3.516,3.516-9.213,3.516-12.729,0.00l-4.62-4.617c-3.513-3.516-3.513-9.213,0.00-12.729l 4.431-4.056C 9.834,21.195, 13.938,20.64, 17.283,22.23 l-10.218,10.215C 5.895,33.618, 5.895,35.52, 7.065,36.69z" >;
  }
});

module.exports = SwitchOn;