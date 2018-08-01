import React from 'react';



export const getUser = () =>{
    let url = 'https://pokeapi.co/api/v2/pokemon/1/'
    fetch(url,{
        method:'GET',
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then(result=>{
        if(result.status == 200){
            return result.json();
        }
    })
    .then(data=>{
        return data;
    })
}

export const createUser = () =>{

    return "createStatement"

}
