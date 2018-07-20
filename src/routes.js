import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NotFound } from './Components/Errors'


//import components here
import Home from './Components/Home'



//nested topics
import Topics from './Components/Topics'
import TestTopic from './Components/Topics/test'





class Routes extends Component {


  render() {
    
    return <Switch>
          <Route exact path="/" render={Home} />
          <Route path="/test/:id" render={({match}) => <div> Hello id {match.params.id}</div>} />
          <Route path="/topics" component={Topics} />
          {/* create a nested route */}
          {/* <Route
            path="/topics"
            render={({ match: { url } }) => (
              <div>
                <Route exact path={`${url}/`} component={Topics} />
                <Route path={`${url}/home`} component={TestTopic} />
              </div>
            )}
          /> */}

          <Route component={NotFound} />
        </Switch>

  }
}

export default Routes;