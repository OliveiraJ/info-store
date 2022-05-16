import styled from "styled-components"
const PropfileContainer = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color:gray;
`

export function Profile() {
    return (
        <PropfileContainer>
            <h1>Profile</h1>
        </PropfileContainer>
    )

}