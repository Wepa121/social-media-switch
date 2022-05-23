import React from "react";
import {HeaderCss, Div, ToggleCss} from "./styles/header.styled"

function Toggle(props){

    return(
        <ToggleCss>
            <input type="checkbox"
            onChange={props.check}/>
            <span></span>
        </ToggleCss>
    )
}


export function Header(props){
    return(
        <HeaderCss>
            <div>
                <div>
                    <h2>Social Media Dashboard</h2>
                    <p>Total Followers: 23,004</p>
                </div>
                <Div>
                    <p>Dark Mode &nbsp;</p>
                    <Toggle
                    check = {props.check}/>
                </Div>
            </div>
            
        </HeaderCss>
    )
}