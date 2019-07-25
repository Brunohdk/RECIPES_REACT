import React, {useEffect, useState} from 'react';
import Recipe from './Recipe'
import './App.css'

const App = () => {

const APP_ID = "6711421c";
const APP_KEY = "7c973bad6cbcb91638f301c00182cfc0";

const [recipes, setRecipes] = useState([])
const [search, setSearch] = useState("chicken")
const[query, setQuery] = useState("")

useEffect( ()=>{
  getRecipes()
}, [query])

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json()
  setRecipes(data.hits)
}

const updateField = e => {
  setSearch(e.target.value)
}

const getSearch = e => {
  e.preventDefault()
  setQuery(search)
  setSearch("")
}

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" value={search} onChange={updateField} type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        img={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>    
  )
}


export default App;
