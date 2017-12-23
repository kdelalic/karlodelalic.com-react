import React, { Component } from 'react';
import "../css/home.css";
import "bulma/sass/grid/_all.sass"
import NavBar from './navbar.js'


export default class Home extends Component {

    render() {
	    return (
	      <div>
	      	<NavBar/>
	      </div>
	    );
  	}
}