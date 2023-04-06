import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  ContainerMain,
  Header,
  Link,
  LinkLogo,
  Logo,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <Logo>
            <LinkLogo to="/">
              <span role="img" aria-label="computer icon">
                🎥
              </span>
              FT
            </LinkLogo>
          </Logo>
          <nav>
            <Link to="/">Home</Link>
            <Link to="movies">Movies</Link>
          </nav>
          <>
            <Link to="movies">Long in</Link>
          </>
        </Header>
      </Container>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
