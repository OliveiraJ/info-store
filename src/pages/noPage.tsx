import styled from "styled-components"
const NoPageContainer = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color:gray;
`

export function NoPage() {
    return (
        <NoPageContainer>
            <h1>404
                Página não encontrada :(</h1>
        </NoPageContainer>
    )

}