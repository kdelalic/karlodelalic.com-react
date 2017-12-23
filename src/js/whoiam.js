import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/whoiam.css';
import profile from '../img/profile.png'
import delta from '../img/delta.png'
import phaseone from '../img/phaseone.png'
import bell from '../img/bell.png'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default class WhoIAm extends Component {

  render() {
    return (
      <div className="whoiam">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={500}>
            <Container className="container">
              <img className="profileImage" src={profile} alt={"profilePic"}/>
              <h3>HELLO!</h3>
              <div className="dash"></div>
                <p>My name is Karlo.</p>
                <p>I'm an undergraduate student at McMaster University pursuing my degree in Software Engineering.</p>
                <p>I participate in hackathons and online coding challenges such as HackerRank, make small projects, and hack random stuff.</p>
                <p>I enjoy exploring ways to better myself everyday. I like programming, building things and during my down time I like to unwind by playing video games. I also have a Twitch stream that I am trying to grow.</p>
              <div className="dash"></div>
              <p className="small">Places I've worked at:</p>
              <Row className="work">
                <Col>
                  <img className="delta" src={delta} alt={"Delta Aluminum"}/>
                </Col>
                <Col>
                  <img className="phaseone" src={phaseone} alt={"PhaseOne"}/>
                </Col>
                <Col>
                  <img className="bell" src={bell} alt={"Bell"}/>
                </Col>
              </Row>
              <p className="details">You can find more details <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kdelalic">here</a>.</p>
            </Container>
        </ScrollAnimation>
      </div>
    );
  }
}