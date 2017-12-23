import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import '../css/contact.css';
import FontAwesome from'react-fontawesome';


export default class Contact extends Component {

  render() {
    return (
      <div className="contact">
        <Container>
          <FontAwesome name="paper-plane-o"/>
          <h3>Are you interested?</h3>
          <h5>Whether you have an interesting project or just want to say hi, feel free to shoot me a message.</h5>
          <Button href="mailto:delalik@mcmaster.ca" outline color="secondary">Say Hi!<FontAwesome name="envelope-o"/></Button>
          <div className="dash"></div>
          <h3 className="resume">Here's my RESUMÉ</h3>
          <Button href="https://karlodelalic.com/resume/Karlo_Delalic_Resume.pdf" target="_blank" rel="noopener noreferrer" outline color="secondary">Resumé<FontAwesome name="file-pdf-o"/></Button>
        </Container>
      </div>
    );
  }
}