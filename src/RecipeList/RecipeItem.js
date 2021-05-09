import React from 'react'

export const RecipeItem = ({item}) => {

    const formattedItem = {
        title: item.title || '',
        description: item.description || '',
        author: item.author || '',
        date: item.date || '',
    }

    return (
        <li className='recipe-item-container'>
            <h2 className='recipe-title'>{formattedItem.title}</h2>
            <p className='recipe-description'>{formattedItem.description}</p>
            <span className="recipe-author">{formattedItem.author}</span>
            <span className="recipe-date">{formattedItem.date}</span>
        </li>
    )
}

