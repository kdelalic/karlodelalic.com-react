import React, { Component } from 'react';
import "../css/contact.css";
import RaisedButton from 'material-ui/RaisedButton';

export default class Contact extends Component {

  render() {
    return (
        <div className="contact container">
          <i className="icon ion-paper-airplane"/>
          <h3>Are you interested?</h3>
          <h5>Whether you have an interesting project or just want to say hi, feel free to shoot me a message.</h5>
          <RaisedButton className="raisedButton"
            href="mailto:delalik@mcmaster.ca"
            label="Say Hi!"
            primary={true}
            icon={<i className="icon ion-ios-email-outline"/>}
          />
          <div className="dash"></div>
          <h3>Here's my RESUMÉ</h3>
          <RaisedButton className="raisedButton"
            href="https://drive.google.com/open?id=1ZQahZ6yF3k-IZ_ACJx8gJFZo-SQntwz3"
            target="_blank"
            label="Resumé"
            primary={true}
            icon={<i className="icon ion-document"/>}
          />
        </div>
      );
  }
}