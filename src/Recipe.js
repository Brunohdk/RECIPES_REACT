import React from 'react'
import style from './recipe.module.css'

const Recipe = ({title, calories, img, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>{ingredients.map(i => (
                <li>{i.text}</li>
            ))}</ol>
            <p><span className={style.cal}>Calories: </span>{calories.toFixed(2)}</p>
            <img className={style.image} src={img}/>

        </div>
    )
}

export default Recipe