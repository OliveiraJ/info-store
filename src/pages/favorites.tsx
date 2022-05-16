import styled from "styled-components"
const FavoritesContainer = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color:gray;
`

export function Favorites() {
    return (
        <FavoritesContainer>
            <h1>Favorites {`<3`}</h1>
        </FavoritesContainer>
    )

}