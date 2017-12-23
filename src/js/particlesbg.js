import React, { Component } from 'react';
import '../css/particles.css';

export default class ParticlesBG extends Component {

  render() {
    return (
      <div className="particles">
        <div className="stars"></div>
        <div className="twinkling"></div>
      </div>
    );
  }
}