import React from "react"
import "./styles.css"



export default function SearchBox(props) {
    return <div id="search-div">
        <input type="text" placeholder="Search" id="search-box" value={props.textValue} onClick={props.filterNames}/><button type="submit" >Search</button>
        </div>
}