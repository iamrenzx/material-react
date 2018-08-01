import React, {Component} from 'react'
import { Link } from "react-router-dom";


class Pokemon extends Component {

  constructor(props){
      super(props);
      this.state = {
          isLoading:true,
          requestFailed:false,
      }
  }

  componentDidMount(){
      fetch("https://pokeapi.co/api/v2/pokemon/?limit=811")
      .then(response=>{

          if(!response.ok){
              throw Error("Network request failed")
          }
          return response.json();

      })
      .then(d=>{
          console.log(d)
          this.setState({
              pokemonData:d.results
          })
      },()=>{
          this.setState({
              requestFailed:true
          })
      })

  }

  render(){

    let pokemonData = this.state.pokemonData

  if(this.state.requestFailed == true) return <p> Error </p>
  if(!this.state.pokemonData) return <p>Loading ..</p>
  return  <div>
      <h2> List of all pokemon </h2>
      {pokemonData.map(poke=>(
          <div key={poke.name}>{poke.name}</div>
      ))}
        
       
   </div>
  }
}

export default Pokemon;