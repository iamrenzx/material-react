import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../routes.js'

import Footer from '../Containers/Footer'
import Header from '../Containers/Header'
import Sidebar from '../Containers/Sidebar'
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css'
class App extends Component {

  state = {
      hello: 'Material UI'
    }
  

  render() {

    const theme = createMuiTheme({
      palette: {
        primary: {
          // main color of theme
          main: '#2196f3',
          //change font color
          contrastText: '#ffffff'


        },
        secondary: {
        // //   light: '#0066ff',
          main: '#ffffff',
        // //   // dark: will be calculated from palette.secondary.main,
        // //   contrastText: '#ffcc00',
        },
        // error: will use the default color
      },
      typography:{
        fontSize:12,
        fontFamily:[
          "Roboto", "Helvetica", "Arial", "sans-serif"
        ].join(','),
      },
    });

    


    return     <BrowserRouter>
    <MuiThemeProvider theme={theme}>
    
    
    <Header hello={this.state.hello} />
    <div className="container">
    <div className="sidebar">  
    <Sidebar />
    </div>

    <div className="main-content">

   
        <Routes />

    </div>
    </div>

    <Footer />  
 
    </MuiThemeProvider>
      
    </BrowserRouter>
  }
}

export default App;