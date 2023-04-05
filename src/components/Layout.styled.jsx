import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ContainerMain = styled.div`
  border: 2px solid rgb(0, 13, 255);
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-between; */
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

// export const Logo = styled.p`
//   font-weight: 700;
//   margin: 0;
// `;

export const Link = styled(NavLink)`
  /* padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500; */

  margin: 100px;

  &.active {
    color: white;
    background-color: orangered;
  }
`;
