import React from 'react'
import {RecipeItem} from "./RecipeItem";

export const RecipeList = () => {
    const i = {title: 'title', imgSrc: 'imgSrc1', description: 'description', author: 'author', date: 'date'}
    const i2 = {title: 'title2', imgSrc: 'imgSrc2', description: 'description2', author: 'author2', date: 'date2'}
    const i3 = {title: 'title3', imgSrc: 'imgSrc3', description: 'description3', author: 'author3', date: 'date3'}

    const recipes = [i, i2, i3]

    return (
        <div>
            <ul>
                {recipes.map(item => (<RecipeItem item={item} />))}

            </ul>
        </div>
    )
}

