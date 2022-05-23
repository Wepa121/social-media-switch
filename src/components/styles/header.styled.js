import styled from "styled-components";


export const HeaderCss = styled.header`
    background-color: ${({theme})=>theme.top};
    height: 200px;
    padding: 32px 10px;
    border-radius: 0px 0px 15px 15px;
    h2{
        color: ${({theme})=> theme.result};
        font-size: clamp(1rem, 2.8vw, 1.5rem);
    }
    p{
        color: ${({theme})=> theme.text};
        font-size: clamp(0.7rem, 1.4vw, 0.9rem);
    }

    & > div{
        padding: 10px;
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items:start;
    }  
    @media(max-width: 500px){
        & > div{
            flex-direction: column;
            & > div:nth-of-type(1){
                display: flex;
                justify-content: space-between;
                width: 100%;
            }
        }
    } 
`
export const Div = styled.div`
    display: flex;
    align-items:center;
    p{
        color: ${({theme})=> theme.result};
    }
    @media(max-width: 500px){
        width: 100%;
        justify-content: space-between;
    }
`

export const ToggleCss = styled.label`
    width: 44px;
    height: 22px;
    position: relative;
    & input{
        opacity:0;
        width:0;
        height:0
    }
    & span{
        display: inline-block;
        position: absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        background-image: linear-gradient(to right, ${({theme})=>theme.toggle[0]}, ${({theme})=>theme.toggle[1]});
        border-radius: 11px;
        
    }

    & span:before{
        position: absolute;
        content: "";
        top:2px;
        right:24px;
        left:2px;
        bottom:2px;
        background-color: ${({theme})=>theme.circle};
        border-radius: 13px;
        transition: 0.3s;
    }
    & input:checked + span:before{
        transform: translateX(20px);
    }
    &:hover{
        cursor: pointer;
    }

`