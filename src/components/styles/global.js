import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`
     @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Mono:wght@700&display=swap');

     body{
          background-color: ${({theme})=>theme.back}
     }
    
    `
