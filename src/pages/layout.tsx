import { TopBar } from '../components/top-bar/top-bar';
import { Footer } from '../components/footer/footer';
import { TopBarContainer, FooterContainer, GridLayout } from '../components/containers/containers';
import { Outlet } from 'react-router-dom';

export function Layout() {
    return (
        <GridLayout>
            <TopBarContainer>
                <TopBar />
            </TopBarContainer>
            <Outlet />
            <FooterContainer>
                <Footer />
            </FooterContainer>
        </GridLayout>
    )
}