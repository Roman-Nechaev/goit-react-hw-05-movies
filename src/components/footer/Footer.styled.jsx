import styled from '@emotion/styled';
import {
  RiTelegramLine,
  RiGithubFill,
  RiLinkedinBoxLine,
} from 'react-icons/ri';

export const ContainerFooter = styled.div``;

export const WrapperSocial = styled.ul`
  display: flex;
  margin: 0;
  margin-left: 200px;
`;

export const SocialLi = styled.li`
  padding-right: 25px;

  color: #00ff40;
`;

export const SocialLink = styled.a`
  color: #ffffff;
`;

export const RiTelegramLineSt = styled(RiTelegramLine)`
  padding: 10px;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  color: white;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  :hover,
  :focus {
    background-color: #00b3ff5a;
  }
`;

export const RiLinkedinBoxLinSt = styled(RiLinkedinBoxLine)`
  padding: 10px;

  border-radius: 100%;
  width: 32px;
  height: 32px;
  color: white;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  :hover,
  :focus {
    background-color: #00b3ff5a;
  }
`;

export const RiGithubFillSt = styled(RiGithubFill)`
  padding: 10px;

  border-radius: 100%;
  width: 32px;
  height: 32px;
  color: white;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  :hover,
  :focus {
    background-color: #00b3ff5a;
  }
`;
