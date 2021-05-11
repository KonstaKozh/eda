import React from 'react'
import {Filter} from "./Filter"
import './FilterBar.scss'

export const FilterContainer = () => {
    return (
        <div className='filter-container'>
            <Filter/>
            <Filter/>
            <Filter/>
        </div>
    )
}
