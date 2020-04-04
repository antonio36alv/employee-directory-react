import React from "react"
import "./styles.css"

export default function FieldsDiv(props) {
    return <div id="fields-div">
        <div><p>Image</p></div>
        <div onClick={props.sortName}><p>Name</p></div>
        <div><p>Phone</p></div>
        <div><p>E-mail</p></div>
        <div><p>DOB</p></div>
    </div>
}