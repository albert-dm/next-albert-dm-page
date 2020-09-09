import styled from 'styled-components';


export const PortfolioCardContainer  = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap');
    
    display:flex;
    cursor: pointer;
    flex-direction: column;
    font-size: 16px;
    font-family: 'Rubik', sans-serif;
    
    align-items: center;
    text-align: center;
    

    .card{
        margin-top:50px;
        width:40vh;
        height:40vh;
        border-style:solid;
        border-color:#3f3db9;
        border-width:0.1px;
        border-radius:5px;
        box-shadow: 5px 5px 5px #C4C4C4;
        display:flex;
        flex-direction:column;
    }
    .cardHeader{
        width:100%;
        height:20px;
        display:flex;
        justify-content:center;
        align-content: center;
        background-color:#3f3db9;
    } 
    .cardBody {
        height:100%;
        display:flex;
        justify-content:center;
        align-content: center;
    }

    .cardBody p {
        display:flex;
        align-items:center;
        justify-content:center;
        font-size: 16px;
        font-family: 'Rubik', sans-serif;
    }

  `;