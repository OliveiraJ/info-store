import { Twitter, Instagram, Facebook, Whatsapp, Telephone, Envelope } from "@styled-icons/bootstrap"
import { Link } from "react-router-dom"
import styled from "styled-components"

const SocialMediaSection = styled.section`
    li{
        display: inline;
        margin: 0 8px 0 8px;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const SocialLink = styled(Link)`
    color: black;
     a, :hover, :focus, :active{
        text-decoration: none;
        color: inherit;
    }
`

function Footer() {
    return (
        <>
            <p>&copy; All Rights reserved for INFO-Store</p>
            <SocialMediaSection>
                <p>Fale conosco:</p>
                <ul>
                    <li>
                        <SocialLink to="" >
                            <Twitter size="20" title="Twitter" />
                        </SocialLink>
                    </li>
                    <li>

                        <SocialLink to="" >
                            <Instagram size="20" title="Instagram" />
                        </SocialLink>
                    </li>
                    <li>

                        <SocialLink to="" >
                            <Facebook size="20" title="Facebook" />
                        </SocialLink>
                    </li>
                    <li>

                        <SocialLink to="" >
                            <Whatsapp size="20" title="Whatsapp" />
                        </SocialLink>
                    </li>
                    <li>

                        <SocialLink to="" >
                            <Telephone size="20" title="Telephone" />
                        </SocialLink>
                    </li>
                    <li>


                        <SocialLink to="" >
                            <Envelope size="20" title="Envelope" />
                        </SocialLink>
                    </li>
                </ul>
            </SocialMediaSection>
        </>
    )
}

export { Footer }