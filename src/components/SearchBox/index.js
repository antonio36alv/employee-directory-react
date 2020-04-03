import React from "react"
import "./styles.css"



export default function SearchBox() {
    return <div>
        <button type="submit" onClick="search">Search</button><label>Search: </label><input type="text" id="search-box"/>
        </div>
}