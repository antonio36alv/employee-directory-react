import React from "react"
import "./styles.css"



export default function SearchBox(props) {
    return <div id="search-div">
        <input type="text" placeholder="Search" id="search-box" value={props.textValue} onChange={props.filterNames}/>
        </div>
}