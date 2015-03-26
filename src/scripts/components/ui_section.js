'use strict';

var React = require('react/addons');
var cx = React.addons.classSet;
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Icons = require('./icons');

var Examples = React.createClass({
  getInitialState: function() {
    return {
      showCode: true
    };
  },

  handleToggleIcons: function() {
    this.setState({showCode: true});
  },

  handleToggleCode: function() {
    this.setState({showCode: false});
  },

  render: function() {
    return (
      <div className="example">
        <nav className="example__tabs">
          <a className={cx({"example__tab": true, "is-selected": this.state.showCode})}
            onClick={this.handleToggleIcons}>
            Icons
          </a>
          <a className={cx({"example__tab": true, "is-selected": !this.state.showCode})}
            onClick={this.handleToggleCode}>
            Code
          </a>
        </nav>
        {this.state.showCode ?
          <div className="example__pane icons">
            <Icons/>
          </div>
        :
          <div className="example__pane">
            <code>
              <span>{"var Icon = require('./Reacticons');"}</span>
              <span>{'var Tag = Icon.Tag'}</span>
              <span>&nbsp;</span>
              <span>{'<Icon.Arrow type="left"/>'}</span>
              <span>{'<Icon.Settings/>'}</span>
              <span>{'<Tag/>'}</span>
            </code>
          </div>
        }
        <a className="example__link">See a full list of available icons and variants</a>
      </div>
    );
  }
});

var UISection = React.createClass({
  render: function() {
    return (
      <section className="ui-section">
        <div className="width-wrapper">
          <h2>Use them in your UI</h2>
          <p>
            Reacticons Batch is an React implementation of Adam W's fabulous <a>Batch</a> icon set,
            and built as a proof-of-concept of the idea of ditching font-based icons in favor of
            SVG component sets. <a>Read more about this project</a>, or if you've got a bright idea,
            <a>contribute on Github</a>.
          </p>
          <Examples/>
        </div>
      </section>
    );
  }
});

module.exports = UISection;
