import React, { MouseEventHandler } from "react";

interface ButtonProps {
    text : String,
    onClick : MouseEventHandler
}

export default function Button (props : ButtonProps) {
    return <button onClick={props.onClick}> {props.text} </button>
}