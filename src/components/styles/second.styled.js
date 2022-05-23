import styled from "styled-components"


export const SecondCss = styled.div`
    background-color: ${({theme})=>theme.back};
    padding: 0px 10px;
    margin-top: calc(4rem - clamp(1rem, 4vw, 3rem));
    & > div{
        padding: 10px;
        max-width: 960px;
        margin: 0px auto;  
        
        color: ${({theme})=> theme.result};
        h2{
            font-size: clamp(0.8rem, 2.5vw, 1.3rem);
        }
    }

`