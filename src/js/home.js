import React, { Component } from 'react';
import "../css/home.css";
import RaisedButton from 'material-ui/RaisedButton';
import {NavLink} from "react-router-dom";

const style = {
	height: 50,
}

export default class Home extends Component {

    render() {
      return (
        <div className="home container">
        	<h1 className="motto">I DESIGN AND DEVELOP AWESOME SOLUTIONS FOR CHALLENGING PROBLEMS.</h1>
        	<NavLink to="/about">
	        	<RaisedButton style={style} 
	        	className="learnMore pulse-button"
	            target="_blank"
	            labelPosition="before"
	            label="Learn About Me"
	            primary={true}
	            icon={<i className="icon ion-arrow-right-c"/>}
	          	/>
          	</NavLink>
        </div>
      );
    }
}