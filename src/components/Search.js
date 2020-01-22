import React, { useState } from "react";

const Search = (props) => {
    const [searchText, setSearchText] = useState("");
    
    const OnSearchTextChange = (e) => {
        setSearchText(e.target.value);
    }

    const SetEmptySearchText = () => {
        setSearchText("");
    }

    const OnSearchSubmit = (e) => {
        e.preventDefault();
        props.search(searchText);

    }

    return (
        <form className = "search">
            <input type = "text" onChange = {OnSearchTextChange} value = {searchText} />
            <input type = "submit" onClick = {OnSearchSubmit} value = "SEARCH" />
        </form>
    );
}

export default Search;