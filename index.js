import React from 'react'
import Tween from 'gsap'
import ReactDOM from 'react-dom'
import { createHistory, history } from 'history'
import { Router, Route, Link, Navigation, browserHistory } from 'react-router'

// Const
const div = document.body.appendChild(document.createElement('div'))
// App
class App extends React.Component {
    constructor(props) {
    super(props)
    this.tick = this.tick.bind(this)
    this.state = {count: 0, move: 10}
  }

  componentWillMount(done) {
    Tween.from(div, 0.5, { x: 500, opacity: 0 });
  }

  componentWillUnmount(done) {
    Tween.from(div, 0.5, { x: 500, opacity: 0 });
  } 
  
  tick() {
    console.log(this, history);
    this.setState({ count: this.state.count + 1 });
    history.pushState(null, '/about')  }

  over() {
    let header = ReactDOM.findDOMNode(this);
    Tween.to(header, 0.5, { x: 500, height: 300 });
  }


  leave() {
    let header = ReactDOM.findDOMNode(this);
    Tween.to(header, 0.35, { x: 0, height: 100 });
  }

  render () {
    let css = {
      padding: 0,
      backgroundColor: '#b2b2b2',
      color: '#fff'
    }
    return <div name='header' style={css} onMouseEnter={this.over.bind(this)} onMouseLeave={this.leave.bind(this)} onClick={this.tick}>
      Netflix Counter: {this.state.count}
    </div>
  }
}

// About
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0, move: 10};
  }

  componentWillMount(done) {
    Tween.from(div, 0.5, { x: 500, opacity: 0 });
  }

  componentWillUnmount(done) {
    Tween.from(div, 0.5, { x: 500, opacity: 0 });
  } 
  
  tick() {
    this.setState({ count: this.state.count + 1 });
  }

  over() {
    let header = ReactDOM.findDOMNode(this);
    Tween.to(header, 0.5, { x: 500, height: 300 });
  }


  leave() {
    let header = ReactDOM.findDOMNode(this);
    Tween.to(header, 0.35, { x: 0, height: 100 });
  }

  render () {
    let css = {
      padding: 0,
      backgroundColor: '#b2b2b2',
      color: '#fff'
    }
    return <div name='header' style={css} onMouseEnter={this.over.bind(this)} onMouseLeave={this.leave.bind(this)} onClick={this.tick.bind(this)}>
      Netflix Counter: {this.state.count}
    </div>
  }
}ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
    </Route>
  </Router>, div)
