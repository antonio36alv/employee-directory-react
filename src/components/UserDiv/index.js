import React from "react"
import "./styles.css"

export default function UserDiv(props) {

    return <div className="user-div">
            <div><img alt={props.name} src={props.image} /></div>
            <div><p>{props.name}</p></div>
            <div><p>{props.phone}</p></div>
            <div><p><a href={"mailto:" + props.email}>{props.email}</a></p></div>
            <div><p>{props.dob}</p></div>
        </div>
}