import styled from "styled-components";
import  backgroundImg  from "../../assets/BackGround-Mobile.svg";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: grid;
    grid-template-rows: 30vh 60vh 50px;
    grid-template-areas: 
                        "logoContainer"
                        "content"
                        "footer";

    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
    background-color: white; 

    @media (min-width: 480px) {
        background: none;
        background-color: white;
        

        grid-template-rows:105px 30vh 60vh 50px;
        grid-template-areas: 
                        "header"
                        "logoContainer"
                        "content"
                        "footer";
 
    }

    @media (min-width: 992px) {
        grid-template-columns: 50% 50%;
        grid-template-rows:105px 80vh 50px;
        grid-template-areas: 
                        "header header"
                        "content logoContainer"
                        "footer footer";
    }


`;


export const LogoContainer = styled.div`

    grid-area: logoContainer;

    height: auto;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    justify-content: center;
    padding-top: 15px;

    > :last-child {
        width: 50%;
    }
    
`;
export const Content = styled.div`

    grid-area: content;

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;

    > div:first-child {
        font-size: 16px;

        h2{

            font-size: 26px;
        }
           
    }
    .button{ 
        width: 100%;
        padding:0 10%;
        > button{   
            margin:10px 0;
        }
            
        > button:last-child  {          
                border:2px solid black ;
                background-color:white ;
                color:black;
                font-weight: bold;           
        }
    }

    @media (min-width: 480px) {

        > div:first-child {
        font-size: 22px;

            h2{
                font-size: 30px;
            }
        }
        .button{ 
            width: 100%;
            padding:0 10%;
            margin-top: -25%;
            > button{   
                margin: 0 10px ;
            width: 45%;
            }
            
            > button:last-child  {          
                    border:2px solid black ;
                    background-color:white ;
                    color:black;
                    font-weight: bold;           
            }
       
        }
    }
    @media (min-width: 992px) {
        height: 100%;

        > div:first-child {
        font-size: 20px;

            h2{
                font-size: 30px;
            }
        }

        > div:first-child {
            margin-top: 15%;
            height: 30%;
        }
        .button{ 
            width: 100%;
            padding:0 10%;
            margin-top: -10%;
            > button{   
                margin: 0 10px ;
            width: 45%;
            }
            
            > button:last-child  {          
                    border:2px solid black ;
                    background-color:white ;
                    color:black;
                    font-weight: bold;           
            }
       
        }
 
    }

    @media (min-width: 1440px) {
        height: 100%;

        > div:first-child {
        font-size: 24px;

            h2{
                font-size: 36px;
            }
        }
    }
`;