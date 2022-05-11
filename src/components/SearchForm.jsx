import React from 'react'

const SearchForm = (search) => {

  return (
    <form action="" className={search.search ? "search-form open-search-form" : "search-form"}>
      <input 
        placeholder='search here...'
        type="search" 
        className="search-box"
      />
      <label htmlFor="search-box" className="fas fa-search"/>
      <i 
        className="fas fa-times search-close"
        onClick={() => search.setSearch(!search.search)}
      ></i>
    </form>
  )
}

export default SearchForm