import React from "react";
import {FirstCss, Data, Data2, Div} from "./styles/first.styled"

import {data1} from "./data/data1"

export function First(){
    return(
        <FirstCss>
            <div>
                {data1.map((x, index)=>{
                    return(<FirstComp key = {index} item = {x}/>)
                })}
            </div>
        </FirstCss>
                    
    )
} 

function FirstComp(props){
    const {back, im1, p1, p2, im2, p3, p4} = props.item;
    let colorUD = "hsl(163, 72%, 41%)"
    if(im2 === "/static/media/icon-down.0c77426d8f1ab70c4ae629868c263878.svg"){
        colorUD = "hsl(356, 69%, 56%)"
    }
   return(
       <Div back = {back}>
           <div></div>
           <div>
           <Data>
               <img src = {im1} alt=""/>
               <p>&nbsp;&nbsp;{p1}</p>
           </Data>
           <p><b>{p2}</b></p>
           <p>{p4}</p>
           <Data2 color = {colorUD}>
               <img src = {im2} alt = ""/>
               <p><b>&nbsp;{p3} Today</b> </p>
           </Data2>
           </div>
       </Div>
   )
} 
  