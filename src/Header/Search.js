import React from "react"

export const Search = () => {
    return (
        <form action="/list" method="post" acceptCharset="UTF-8" className='search-form'>
                <input autoComplete="off" className='searchInput' id="txt-search" name="search_term_string" placeholder="Поиск по рецептам" type="text"/>
                <button className="form-btn" type="submit" />
        </form>
    )
}