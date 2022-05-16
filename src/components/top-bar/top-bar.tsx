import { NavBarContainer, Nav } from "./navbar"
import { SearchBar } from "./search"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Handbag, Heart, Person, Shop } from "@styled-icons/bootstrap"

const Title = styled.p`
    font-weight: 800;
    color: #e10141;
    font-size: xx-large;
`

function TopBar() {
    return (
        <>
            <Nav>
                <Link to="/">
                    <Title>
                        INFO-Store
                    </Title>
                </Link>
            </Nav>

            <SearchBar type="search" placeholder="Encontre o produto que deseja" />

            <NavBarContainer>
                <Nav>
                    <Link to="/">
                        <Shop size="30" title="Produtos" />
                    </Link>
                </Nav>
                <Nav>
                    <Link to="/bag">
                        <Handbag size="30" title="Sacola" />
                    </Link>
                </Nav>
                <Nav>
                    <Link to="/favorites">
                        <Heart size="30" title="Favoritos" />
                    </Link>
                </Nav>
                <Nav>
                    <Link to="/profile">
                        <Person size="35" title="Minha conta" />
                    </Link>
                </Nav>
            </NavBarContainer>
        </>
    )
}

export { TopBar }