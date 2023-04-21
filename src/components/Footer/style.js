import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.footer`

    grid-area: footer;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 50px;   
    box-shadow: 0 5px #CFCCE0;
    background: #1A1A1A;

    > div:first-child{
        justify-content: center;
        width: 100%;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
        padding-top: 25px;  
    }
`;

export const Options = styled.div`
    width: 100%;
    border: none;
    background: none;
    color: white;
    text-align: right;
    justify-content: baseline;
    align-items: baseline;
    padding-top: 25px; 
    
    > a {
        color: white;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        padding: 10px;   
       
    } 
    
`;