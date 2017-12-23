import React, { Component } from 'react';
import "../css/navbar.css";

export default class NavBar extends Component {

    render() {
	    return (
	      <div className="navBar">
	      	<ul>
	      		<li><a href="/">Home</a></li>
	      		<li><a href="/about/">About</a></li>
	      		<li><a href="/work/">Work</a></li>
	      		<li><a href="/contact/">Contact</a></li>
	      	</ul>
	      </div>
	    );
  	}
}