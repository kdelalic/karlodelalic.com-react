import React, { Component } from 'react';
import { Container, Row, Col, Progress } from 'reactstrap';
import '../css/whativedone.css';
import FontAwesome from'react-fontawesome';

export default class WhatIveDone extends Component {

  render() {
    return (
      <div className="whativedone">
        <Container>
          <h3>Projects</h3>
          <div className="dash"></div>
          <Row>
            <Col xs="8">
              <Row>
                <h5>Shuffle | ReactJS Web App <a target="_blank" rel="noopener noreferrer" href="https://github.com/kdelalic/Shuffle"><FontAwesome name="github"/></a> <a target="_blank" rel="noopener noreferrer" href="https://goofy-hawking-3c9875.netlify.com/"><FontAwesome name="external-link"/></a></h5>
                <p>A redevelopment of an open source YouTube shuffling app. Made using software engineering principles and design philosophy in mind.</p>
              </Row>
              <Row>
                <h5>Piece Of Mind | Java EE Web App <a target="_blank" rel="noopener noreferrer" href="https://github.com/kdelalic/PieceOfMind"><FontAwesome name="github"/></a></h5>
                <p>An application build on Apache Tomcat that provides analytics of the attitudes of Twitter users as individuals and as a collective.</p>
              </Row>
              <Row>
                <h5>Leo D Photography | Bootstrap Portfolio <a target="_blank" rel="noopener noreferrer" href="https://github.com/kdelalic/leodphotography.com"><FontAwesome name="github"/></a> <a target="_blank" rel="noopener noreferrer" href="http://leodphotography.com"><FontAwesome name="external-link"/></a></h5>
                <p>Leodphotography.com is a photography portfolio made to showcase the artist's photography work and skills.</p>
              </Row>
              <Row>
                <h5>Delta Aluminum | Bootstrap Portfolio <a target="_blank" rel="noopener noreferrer" href="https://github.com/kdelalic/deltaaluminum.com"><FontAwesome name="github"/></a> <a target="_blank" rel="noopener noreferrer" href="http://deltaaluminum.com"><FontAwesome name="external-link"/></a></h5>
                <p>Deltaaluminum.com is a portfolio made to advertise a construction company's products and services.</p>
              </Row>
            </Col>
            <Col xs="4">
              <h5 className="skills">Skills</h5>
              <div className="skillList">
                <Row>
                  <Col xs="3">
                    <p className="skill">Java</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={90} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">JS</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={85} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">HTML</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={95} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">CSS</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={90} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">ReactJS</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={63} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">Python</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={70} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">Latex</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={74} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">DB2</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={50} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">NASM</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={40} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">NodeJS</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={35} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">Bash</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={48} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">Billiards</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={100} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}