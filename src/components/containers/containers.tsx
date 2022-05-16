import styled from "styled-components";

const GridLayout = styled.div`
    display: grid;
    grid-template-areas: 
    "top-bar"
    "main"
    "footer";
    gap: 10px 5px;
    grid-template-rows: 80px 1fr 50px;
`

const FooterContainer = styled.footer`
    grid-area: footer;
    justify-content: space-around;
    align-items: center;
    display: flex;
    flex-direction: row;
    background-color: #d9d9e6;
    color: #e10141;
    font-weight: 550;
`

const TopBarContainer = styled.header`
    grid-area: top-bar;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 1px 2px gray;
    padding: 0 20px 0 20px;
    background-color: white;
    color: #e10141;

`

const MainContainer = styled.main`
    grid-area: main;
    gap: 1em 1em

`

export { MainContainer, FooterContainer, TopBarContainer, GridLayout }