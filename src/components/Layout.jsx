import { Outlet } from 'react-router-dom';
import { Container, ContainerMain, Header, Link } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="movies">Movies</Link>
          </nav>
        </Header>
      </Container>
      <main>
        <ContainerMain>
          <Outlet />
        </ContainerMain>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
