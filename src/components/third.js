import React from "react";
import {ThirdCss, Data2} from "./styles/third.styled"
import {data2} from "./data/data2"

export function Third(){
    return(
        <ThirdCss>
            <div>
                {data2.map((x, index)=>{
                    return(
                        <ThirdComp key= {index}
                        p1 = {x.p1}
                        im1 = {x.im1}
                        p2 = {x.p2}
                        im2 = {x.im2}
                        p3 = {x.p3}/>
                    )
                })}
                </div>
        </ThirdCss>
    )
}

function ThirdComp(props){
    const {p1, im1, p2, im2, p3} = props;
    let colorUD = "hsl(163, 72%, 41%)";
    if(im2 === "/static/media/icon-down.0c77426d8f1ab70c4ae629868c263878.svg"){
        colorUD = "hsl(356, 69%, 56%)"
    }
    return(
                <Data2 color ={colorUD}>
                    <div>
                        <p><b>{p1}</b></p>
                        <img src = {im1} alt =""/>
                    </div>
                    <div>
                        <p><b>{p2}</b></p>
                        <span>
                            <img src = {im2} alt = ""/>
                            <p>&nbsp;{p3}%</p>
                        </span>
                    </div>
                </Data2>
    )
}
