import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`

    grid-area: header;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;   
    box-shadow: 0 5px #CFCCE0;
`;

export const LogoStyled = styled(Link)`

    display: flex;
    align-items: left;

    > :first-child{
        width: 100%;
    }
`;

export const Options = styled.div`
    width: 100%;
    border: none;
    background: none;
    color: black;
    text-align: right;
    justify-content: baseline;
    align-items: baseline;
    padding-top: 25px;    
    text-decoration: none;
   
    > a {
        color: black;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px;   
       
    } 
    
`;