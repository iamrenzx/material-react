import React from 'react'
import { Link } from "react-router-dom";
import './home.css'

const Home = () => (
    
     <div className="test">
        Class this is my home
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
)

export default Home;