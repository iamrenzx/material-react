import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routes from '../routes.js'

import Footer from '../Containers/Footer'
import Header from '../Containers/Header'
import Sidebar from '../Containers/Sidebar'
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import './App.css'
// import { getUser } from '../Services/Users'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarValue: true,
    }
  }

  componentDidMount() {

    //for mobile
    if (window.innerWidth < 900) {
      this.setState({
        sidebarValue: false
      })
    }


  }


  handleSidebarValue = () => {
    this.setState({
      sidebarValue: !this.state.sidebarValue
    })
  }

  handleStyleSidebar = () =>{
    if( this.state.sidebarValue ){
      return {}
    }
      return {display:'none'}
  }

  handleStlyeMainContent = () =>{
    if( this.state.sidebarValue == true && window.innerWidth < 900 ){
      console.log("test if working")
      return {display:'none'}
    }
      return {}
  }

  render() {

    let { sidebarValue } = this.state



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
      typography: {
        fontSize: 12,
        fontFamily: [
          "Roboto", "Helvetica", "Arial", "sans-serif"
        ].join(','),
      },
    });


    return <BrowserRouter>
      <MuiThemeProvider theme={theme}>


        <Header sidebarValue={this.handleSidebarValue} />

        <div className="container">
        {/* conditional rendering */}
          {sidebarValue ?
            <div className="sidebar">
              <Sidebar />
            </div>
            : null}
            {/* css overlap */}
          <div className="main-content" style={this.handleStlyeMainContent()}>

            <Routes />

          </div>

        </div>

        <Footer />

      </MuiThemeProvider>

    </BrowserRouter>
  }
}

export default App;