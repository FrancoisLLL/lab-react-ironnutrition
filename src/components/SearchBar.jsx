import React from 'react'

const SearchBar = (props) => {
    return (
        <div>
            <input name="searchText" type ="text" value={props.searchText} onChange={props.handleChange}/>
        </div>
    )
}

export default SearchBar
