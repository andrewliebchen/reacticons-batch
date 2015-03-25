'use strict';

var React = require('react/addons');
var cx = React.addons.classSet;
var CSSTransitionGroup = React.addons.CSSTransitionGroup;

var Icon = require('../../../icons');

var Icons = require('./icons');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/application.scss');

var Hero = React.createClass({
  render: function() {
    return (
      <header className="header">
        <div className="width-wrapper">
          <div className="header__title">
            <h1>Reacticons!</h1>
            <h2>Scalable file icons for ReactJS</h2>
            <button>Get it now</button>
          </div>
          <div className="header__examples">
            <CSSTransitionGroup transitionName="reacticons">
              <Icons/>
            </CSSTransitionGroup>
          </div>
        </div>
      </header>
    );
  }
});

var Main = React.createClass({
  render: function() {
    return (
      <section className="main">
        <div className="width-wrapper">
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

var Instructions = React.createClass({
  render: function() {
    return (
      <section className="instructions">
        <div className="width-wrapper">
          <a href="https://github.com/andrewliebchen/reacticons" className="button instructions__cta">Download from Github</a>
          <div className="instructions__or">or</div>
          <code className="instructions__code">$ npm install reacticons</code>
          <p>Package includes JSX components which render SVG icons. Just include it in your project and it should be good to go. Have a problem or idea? Feel free to <a href="https://github.com/andrewliebchen/reacticons/issues">open an issue</a>.</p>
          <p>If you're interested, you may also want to check out the <a>original Reacticons</a>.</p>
        </div>
      </section>
    );
  }
});

var Footer = React.createClass({
  render: function() {
    return (
      <footer className="footer">
        <div className="width-wrapper">
          <small>
            <strong><a href="http://github.com/andrewliebchen/reacticons">Reacticons</a></strong> are under an MIT License, and brought to you by <a href="http://andrewliebchen.com">me</a>.</small>
        </div>
      </footer>
    );
  }
});


var App = React.createClass({
  render: function() {
  return (
    <div className="wrapper">
      <Hero />
      <Main />
      <Instructions />
      <Footer />
    </div>
  );
  }
});
React.render(<App />, document.getElementById('content'));

module.exports = App;
