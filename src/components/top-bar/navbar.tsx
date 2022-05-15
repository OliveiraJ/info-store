import styled from "styled-components"

const NavBarContainer = styled.div`
    height: 60px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: inherit;
`

const Nav = styled.nav`
    margin: 0 10px 0 ;
    padding: 10px;
    color: black;
    a, :hover, :focus, :active{
        text-decoration: none;
        color: inherit;

    }
`

export { Nav, NavBarContainer }