import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
`;
export const SectionHeader = styled.div`
  /* max-width: 1024px; */
  margin: 0 auto;
  padding: 0 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #042541;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #042541;
`;

export const Logo = styled.p`
  margin: 0;
`;

export const WrapperLinkNav = styled.nav`
  margin-right: 70px;
`;

export const Link = styled(NavLink)`
  margin-left: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  :hover,
  :focus {
    background-color: #00b3ff5a;
  }
  &.active {
    color: white;
    background-color: #0062ff;
  }
`;

export const SpanLogo = styled.img`
  /* width: 80px; */
  height: 70px;
`;

export const LinkLogo = styled(NavLink)`
  :hover,
  :focus {
    cursor: pointer;
  }
`;

export const SectionMain = styled.main`
  /* margin: 0 auto; */
  /* padding: 0 50px; */

  min-height: calc(100vh - 70px);
`;

export const SectionFooter = styled.footer`
  padding: 15px 50px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #042541;
  /* background-color: #504d67; */
`;

export const SpanLogoFooter = styled.img`
  height: 50px;
`;
