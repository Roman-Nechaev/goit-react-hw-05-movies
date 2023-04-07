import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  /* padding: 0 15px; */
`;
export const SectionHeader = styled.div`
  /* max-width: 1024px; */
  margin: 0 auto;
  padding: 0 20px;
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
  justify-items: baseline;
`;

export const Link = styled(NavLink)`
  margin-left: 10px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &.active {
    color: white;
    background-color: #0062ff;
  }
  :hover,
  :focus {
    background-color: #00b3ff5a;
  }
`;

export const SpanLogo = styled.img`
  width: 80px;
  height: 90px;

  fill: #ffffff;
`;

export const LinkLogo = styled(NavLink)`
  /* cursor: pointer; */
  :hover,
  :focus {
    cursor: pointer;
  }
`;

export const SectionMain = styled.main`
  /* border-bottom: 2px solid rgba(82, 82, 82, 0.376); */
  /* max-width: 1024px; */
  margin: 0 auto;
  /* padding: 0 20px; */
  /* padding-top: 15px; */

  /* background-color: #042541; */
`;
