import React from "react"
import {Header} from './Header/Header'
import {FilterContainer} from "./FilterBar/FilterContainer";
import {RecipeList} from "./RecipeList/RecipeList";


function App() {
    return (
        <>
           <Header/>
           <FilterContainer/>
           <RecipeList />
        </>

    )
}

export default App
