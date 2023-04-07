import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import {
  Container,
  SectionHeader,
  Header,
  Link,
  LinkLogo,
  Logo,
  SpanLogo,
  SectionMain,
} from './Layout.styled';
import LogoIcons from '../Icons/pngegg.png';

const Layout = () => {
  return (
    <Container>
      <SectionHeader>
        <Header>
          <Logo>
            <LinkLogo to="/">
              <SpanLogo src={LogoIcons} alt="Logo Icons" />
            </LinkLogo>
          </Logo>
          <nav>
            <Link to="/">Home</Link>
            <Link to="movies">Movies</Link>
          </nav>
          {/* <>
            <Link to="/">Sign in</Link>
          </> */}
        </Header>
      </SectionHeader>
      <SectionMain>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </SectionMain>
      <footer></footer>
    </Container>
  );
};

export default Layout;
