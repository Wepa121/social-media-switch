import React, { useState } from "react";
import {Header} from "./components/header"
import {First} from "./components/first"
import {Second} from "./components/second"
import {Third} from "./components/third"
import { ThemeProvider } from "styled-components";
import { Global } from "./components/styles/global";
const App = ()=> {
  const [checked, setChecked] = useState(true)

  const [theme, setTheme] = useState(()=>{
    return(
      {
        toggle: ["hsl(210, 78%, 56%)", "hsl(146, 68%, 55%)"],
        circle: "hsl(232, 19%, 15%)",
        back: "hsl(230, 17%, 14%)",
        top: "hsl(232, 19%, 15%)",
        card:["hsl(228, 28%, 20%)", "hsl(228, 28%, 30%)"],
        text:"hsl(228, 34%, 66%)",
        result:"hsl(0, 0%, 100%)"
      }
    )
  }
  )

  function colorSet(){
      setChecked((checked)=> !checked)
      setTheme(()=>{
        if(!checked){
          return(
            {
            toggle: ["hsl(210, 78%, 56%)", "hsl(146, 68%, 55%)"],
            circle: "hsl(232, 19%, 15%)",
            back: "hsl(230, 17%, 14%)",
            top: "hsl(232, 19%, 15%)",
            card:["hsl(228, 28%, 20%)","hsl(228, 28%, 30%)"],
            text:"hsl(228, 34%, 66%)",
            result:"hsl(0, 0%, 100%)"
            }
          )
        }
        else{
          return(
            {
            toggle: ["hsl(230, 22%, 74%)", "hsl(230, 22%, 74%)"],
            circle: "hsl(225, 100%, 98%)",
            back: "hsl(0, 0%, 100%)",
            top: "hsl(225, 100%, 98%)",
            card:["hsl(227, 47%, 96%)", "hsl(227, 47%, 86%)"],
            text:"hsl(228, 12%, 44%)",
            result:"hsl(230, 17%, 14%)"
            }
          )
        }
        
      })
  }
  console.log(checked)
  
  console.log(theme)
  

  return (
    <div>
      <ThemeProvider theme = {theme}>
        <Global/>
        <Header
        check = {colorSet}/>
        <First/>
        <Second/>
        <Third/>
      </ThemeProvider>
    </div>
  );
}

export default App;

// const [toggle, setToggle] = useState(["hsl(210, 78%, 56%)", "hsl(146, 68%, 55%)"]);
  // const [circle, setCircle] = useState("hsl(232, 19%, 15%)");
  // const [back, setBack] = useState("hsl(230, 17%, 14%)");
  // const [top, setTop] = useState("hsl(232, 19%, 15%)");
  // const [card, setCard] = useState("hsl(228, 28%, 20%)");
  // const [text, setText] = useState("hsl(228, 34%, 66%)");
  // const [result, setResult] = useState("hsl(0, 0%, 100%)")
