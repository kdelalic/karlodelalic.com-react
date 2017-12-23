import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/whatido.css';
import FontAwesome from'react-fontawesome';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default class WhoIAm extends Component {

  render() {
    return (
      <div className="whatido">
        <Container>
          <h3>What I do</h3>
          <div className="dash"></div>
          <Row>
            <Col className="padding dev">
              <div className="centerWrapper">
                <FontAwesome name="code"/>
                <h4>Development</h4>
              </div>
            </Col>
            <Col>
              <div className="centerWrapper">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={700}>
                  <p>Programming Languages: Java, Python, C</p>
                  <p>Web Technologies: Javascript, ReactJS, Git, DB2, NodeJS, CSS, HTML</p>
                </ScrollAnimation>
              </div>
            </Col>
          </Row>    
          <Row className="reorder">
            <Col className="first">
              <div className="centerWrapper">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={700}>
                  <p>I'm  <a target="_blank" rel="noopener noreferrer" href="https://www.16personalities.com/istp-personality">ISTP-T</a>. Besides coding, working out, learning, and playing CS:GO, I do my utmost best to better myself and the world around me everyday.</p>
                </ScrollAnimation>
              </div>
            </Col>
            <Col className="padding second">
              <div className="centerWrapper">

                <FontAwesome name="globe"/>
                <h4>The World</h4>
              </div>
            </Col>
          </Row>        
          <Row>
            <Col className="padding">
              <div className="centerWrapper">
                <FontAwesome name="pencil"/>
                <h4>Writing</h4>
              </div>
            </Col>
            <Col>
              <div className="centerWrapper">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={700}>
                  <p className="coming">Coming soon!</p>
                </ScrollAnimation>
              </div>
            </Col>
          </Row> 
        </Container>
      </div>
    );
  }
}