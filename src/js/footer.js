import React, { Component } from 'react';
import '../css/footer.css';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const style = {
    width: 80,
    height: 80,
    padding: 20,
};

const iconStyle = {
  width: 30,
  height: 40,
};

const muiTheme = getMuiTheme({
  ripple : {
    color : '#fff'        // desired ripple color
  }
});

export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <MuiThemeProvider muiTheme={muiTheme}>
            <ul>
              <li><IconButton style={style} iconStyle={iconStyle} target="_blank" rel="noopener noreferrer" href="https://github.com/kdelalic" iconClassName="icon ion-social-github" /></li>
              <li><IconButton style={style} iconStyle={iconStyle} target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/kdelalic" iconClassName="icon ion-social-linkedin" /></li>
              <li><IconButton style={style} iconStyle={iconStyle} target="_blank" rel="noopener noreferrer" href="mailto:delalik@mcmaster.ca" iconClassName="icon ion-email" /></li>
            </ul>
            <p>Karlo Delalic 2017</p>
            <p>Made with React, Ionicons, and lots of <span className="iconSpan"><i className="ion-heart"/></span></p>
        </MuiThemeProvider>
      </div>
    );
  }
}