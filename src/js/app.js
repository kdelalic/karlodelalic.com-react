import React, { Component } from 'react';
import {Route, NavLink, BrowserRouter, Switch} from "react-router-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import "../css/app.css";
import Home from "./home.js";
import About from "./about.js";
import Work from "./work.js";
import Contact from "./contact.js";
import Footer from "./footer.js";
import profile from '../img/profile.png'


export default class App extends Component {
    render() {
	    return (
		    <BrowserRouter>
			    <div className="app">	
			    	<MuiThemeProvider>
			    		<Paper rounded={false} className="paperStyle" zDepth={3}>
				    		<div className="nav">
						      	<ul className="navBar">
						      		<li><NavLink exact to="/">HOME</NavLink></li>
						      		<li><NavLink to="/about">ABOUT</NavLink></li>
						      		<li><img className="profile" src={profile} alt={"profilePic"}/></li>
						      		<li><NavLink to="/work">WORK</NavLink></li>
						      		<li><NavLink to="/contact">CONTACT</NavLink></li>
						      	</ul>
						      	<ul className="social">
						      		<li><IconButton  target="_blank" rel="noopener noreferrer" href="https://github.com/kdelalic" iconClassName="icon ion-social-github" /></li>
						      		<li><IconButton  target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/kdelalic" iconClassName="icon ion-social-linkedin" /></li>
						      	</ul>
						    </div>
						    <Switch>
						    	<Route exact path="/" component={Home}/>
				            	<Route path="/about" component={About}/>
				            	<Route path="/work" component={Work}/>
				            	<Route path="/contact" component={Contact}/>
				            </Switch>
						    <Footer/>
					    </Paper>
					</MuiThemeProvider>
				</div>
		    </BrowserRouter>
	    );
  	}
}