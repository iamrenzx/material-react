import React from 'react'
import {Link,Route  } from 'react-router-dom'


const Topics = ({ match,pokeName,trainer,lel }) => (
    <div>
      <h2>Topics {trainer}</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React my {pokeName}</Link>
        </li>
        <li>
          <Link to={`${match.url}/home`}>Home {lel.wew}</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>
  
      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.url}
        render={() => <h3>Please select a topic.</h3>}
      />


      
    </div>
  );
  
  const Topic = ({ match }) => (

    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );

  export default Topics;