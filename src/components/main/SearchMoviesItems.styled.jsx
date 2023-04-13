import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  /* padding-top: 15px; */
`;

export const Title = styled.h1`
  margin: 0;

  padding-bottom: 10px;
  font-size: 30px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: center;
  border-bottom: 1px solid rgba(139, 139, 139, 0.346);
`;

export const ContentWrapper = styled.div`
  /* border: 2px solid rgb(0, 13, 255); */
  padding-top: 15px;
  display: flex;
  background-color: #7a7a7a25;

  justify-content: center;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: calc(100vw - 82px);
  width: 800px;
`;

export const Li = styled.li`
  margin-bottom: 18px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(227, 227, 227, 1);
  background-color: #fff;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  :hover,
  :focus {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  }
`;

export const ImgWrapper = styled.div`
  min-width: 94px;

  width: 94px;
  height: 141px;
`;

export const ImgCards = styled.img`
  min-width: 100%;
  width: 100%;
  height: 100%;
  outline: none;
  display: block;
`;

export const TitleWrapper = styled.div`
  padding: 10px 15px;
`;

export const TitleCards = styled.h2`
  color: #000000;
  padding-top: 10px;
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  font-weight: bold;
  margin: 0;
`;

export const OverviewCards = styled.p`
  color: #000000;
  padding-top: 25px;
  margin: 0;

  font-weight: normal;
`;

export const Release = styled.span`
  color: #999;
  font-size: 12px;
`;

export const LinkSt = styled(Link)`
  text-decoration: none;
  display: flex;

  :hover,
  :focus {
    cursor: pointer;
  }
`;
