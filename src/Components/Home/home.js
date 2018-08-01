import React, {Component} from 'react'
import { Link } from "react-router-dom";
import './home.css'

class Home extends Component {

  render(){
    console.log(this.props)
  

  return  <div className="test">
       <ul>
       <li>
         <Link to="/">Home</Link>
       </li>
       <li>
         <Link to="/test">Test</Link>
       </li>
       <li>
         <Link to="/topics">Topics</Link>
       </li>
     </ul>

       
   </div>
  }
}

export default Home;