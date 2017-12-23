import React, { Component } from 'react';
import "../css/app.css";
import Home from "./home.js";
import ParticlesBG from "./particlesbg.js"
import profile from '../img/profile.png'
import Paper from 'material-ui/Paper';

export default class App extends Component {

    render() {
	    return (
	      <div className="app">
	      	<ParticlesBG/>
	      	<ul className="navBar">
	      		<li><img src={profile} alt={"profilePic"}/></li>
	      		<li><a href="/">Home</a></li>
	      		<li><a href="/about/">About</a></li>
	      		<li><a href="/work/">Work</a></li>
	      		<li><a href="/contact/">Contact</a></li>
	      	</ul>
	      	<div className="content"></div>
	      </div>
	    );
  	}
}