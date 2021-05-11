import React from 'react'
import {RecipeItem} from "./RecipeItem"
import './RecipeList.scss'

export const RecipeList = () => {
    const i = {title: 'Блинчики с начинкой', imgSrc: '../img/img1.jpg', description: 'Блины с начинкой из субпродуктов и риса', author: 'Linda82 (Marioka82)', date: '12 февраля 2015, 13:18'}
    const i2 = {title: 'Куббе (kubbeh)', imgSrc: '../img/img2.jpg', description: 'Cуп с клёцками из булгура с мясной начинкой', author: 'chef', date: '06 июля 2011, 05:34'}
    const i3 = {title: 'Утиное филе', imgSrc: '../img/img3.jpg', description: 'Утиное филе с лавандово-смородиновым сорбетом', author: 'chef', date: '03 октября 2012, 16:16'}

    const recipes = [i, i2, i3]

    return (
        <div className='recipe-container'>
            <ul>
                {recipes.map(item => (<RecipeItem item={item} />))}
            </ul>
        </div>
    )
}

