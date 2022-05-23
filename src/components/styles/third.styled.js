import styled from "styled-components"


export const ThirdCss  = styled.div`
    background-color: ${({theme})=>theme.back};
    padding: 0px 10px;

    & > div{
        max-width: 960px;
        margin: 0px auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media(max-width:500px){
        // display:flex;
        &>div{
            grid-template-columns: 1fr;
        }
        
    }
`


export const Data2 = styled.div`
    padding: clamp(0.5rem, 2vw, 1.25rem);
    border-radius: 5px;
    background-color: ${({theme})=>theme.card[0]};
    margin: 10px;
    display: flex;
    flex-direction: column;
    &:hover{
        cursor:pointer;
        background-color: ${({theme})=>theme.card[1]};
    }
    & > div{
        display: flex;
        justify-content: space-between;
    }
    & > div:nth-of-type(1){
        margin-bottom: 20px;
        p{
            font-size: clamp(0.5rem, 1vw, 0.8rem);
            color: ${({theme})=>theme.text};
        }
        img{
            width:clamp(0.7rem, 1.5vw, 1rem);
        }
    }
    & > div:nth-of-type(2){
        & > p{
            font-size: clamp(0.8rem, 2vw, 1.6rem);
            color: ${({theme})=>theme.result};
        }
        
    }
    span{
        display: flex;
        align-items:center;
        font-size: 0.5rem;
        img{
            height:0.3rem;
            width: 0.4rem;
        }
        p{
            font-size: clamp(0.5rem, 1vw, 0.6rem);
            color: ${({color})=>color};
        }
    }

`