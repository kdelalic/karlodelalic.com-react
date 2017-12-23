import React, { Component } from 'react';
import '../css/frontscreen.css';
import arrow from '../img/arrow.svg'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
  
export default class FrontScreen extends Component {
  componentWillMount() {
    configureAnchors({scrollDuration: 1000})
  }

  render() {
    return (
      <div className="frontscreen">
        <div className="display">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={400}>
          <h1>HI, I'M KARLO</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={800}>
          <h2>Student / Web Developer / Software Engineer</h2>
        </ScrollAnimation>
        </div>
        <div className="scrollDown">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true} delay={1200} offset={1000}>
          <p>Scroll down</p>
          <a href="#whoiam"><img src={arrow} alt={"down arrow"} /></a>
        </ScrollAnimation>
        </div>
        <ScrollableAnchor id={'whoiam'}><div></div></ScrollableAnchor>
      </div>
    );
  }
}