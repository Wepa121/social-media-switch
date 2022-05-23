import styled from "styled-components"

export const FirstCss = styled.div`
    background-color: ${({theme})=>theme.back};
    padding: 0px 10px;
    & > div{
        max-width: 960px;
        display: flex;
        justify-content: space-between;
        margin: 0px auto;
        
        
        & > div{
            width: 100%;
            margin: 0px 10px;
            margin-top: -90px;
            
            p{
                text-align: center;
            }
            
        }
        
    }
    @media(max-width:500px){
        padding: 0px 20px;
        & > div{
            flex-direction: column;
            justify-content:default;
            & > div{
                margin-top: 10px;
                margin: 10px auto;
            }
        }
    }   
`

export const Data = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color : ${({theme})=>theme.text};
    p{
        font-size: clamp(0.5rem, 0.86vw, 0.65rem);
    }
    img{
        width: 1rem;
    }

`

export const Data2 = styled(Data)`
    color: ${({color})=>color};
    img{
        width: 0.5rem;
    }
`
export const Div = styled.div`
& > div:nth-of-type(1){
    height: 10px;
    border-radius: 5px 5px 0px 0px;
    background-image: linear-gradient(to right, ${({back})=>back[0]}, ${({back})=>back[1]});
}
& > div:nth-of-type(2){
    padding: 20px 0px;
    background-color: ${({theme})=>theme.card[0]};
    &:hover{
        cursor:pointer;
        background-color: ${({theme})=>theme.card[1]};
    }
    margin-top : -7px;
    border-radius: 0px 0px 5px 5px;
    & > p:nth-of-type(1){
        margin-top: 0.5rem;
        color: ${({theme})=>theme.result};
        font-size: clamp(1rem, 4vw, 3rem);
    }
    & > p:nth-of-type(2){
        color: ${({theme})=>theme.text};
        font-size: clamp(0.5rem, 0.9vw, 0.65rem);
        letter-spacing: 0.35vw;
        margin-bottom: 1.3rem;
    }
}
`