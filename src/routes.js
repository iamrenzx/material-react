import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { NotFound } from './Components/Errors'


//import components here
import Home from './Components/Home'
import Pokemon from './Components/Pokemon'


//nested topics
import Topics from './Components/Topics'
import TestTopic from './Components/Topics/test'





class Routes extends Component {


  state = {
    name:'',
  }

  render() {
    let anotherObj = this.props
    let obj = {name:'renzelot',corp:'testing props',lel:{wew:'welp',hehe:'testing objects'}}

    return <Switch>
        {/* passing props to routes also passing object with objects examples */}
          <Route exact path="/" render={(props)=>(
            <Home {...anotherObj}{...obj}{...props}/>
          )} />
          <Route path="/pokemon" render={(props)=>(
            <Pokemon {...anotherObj}{...obj}{...props}/>
          )} />
          <Route path="/test/:id" render={({match}) => <div> Hello id {match.params.id}</div>} />
          <Route path="/topics" render={(props)=>(
            <Topics {...anotherObj}{...obj}{...props}/>
          )} />


          <Route component={NotFound} />
        </Switch>

  }
}

export default Routes;