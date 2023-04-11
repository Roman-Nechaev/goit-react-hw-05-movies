import styled from '@emotion/styled';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export const BgGradient = styled.div`
  padding-top: 15px;
  background-image: linear-gradient(
    to right,
    rgba(52.5, 52.5, 73.5, 1) calc((50vw - 170px) - 340px),
    rgba(52.5, 52.5, 73.5, 0.84) 50%,
    rgba(52.5, 52.5, 73.5, 0.84) 100%
  );
`;
export const ContainerWrapperBgImage = styled.div`
  /* border: 2px solid rgb(0, 13, 255); */

  border-bottom: 1px solid rgb(67, 67, 67);
  background-size: cover;
  background-position: left calc((50vw - 170px) - 340px) top;
  background-repeat: no-repeat;
  background-image: ${props => `url(${props.img})`};
`;

export const ContainerCard = styled.div`
  padding: 8px;

  padding-top: 20px;

  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;

  display: flex;
`;

export const WrapperInfo = styled.div`
  color: #ffffff;
  display: flex;
`;

export const SectionInfo = styled.section`
  /* border: 2px solid rgb(0, 13, 255); */
  padding: 15px;
`;

export const ImgWrapper = styled.div`
  display: block;
  min-width: 300px;
  width: 300px;
  height: 450px;
`;

export const Img = styled.img`
  min-width: 100%;
  width: 100%;
  height: 100%;
  outline: none;
  display: block;
`;

export const SectionLink = styled.div`
  padding-top: 10px;
  padding-bottom: 20px;
`;

export const UlLink = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10%;
`;

export const LinkSt = styled(NavLink)`
  /* display: inline-block; */

  text-decoration: none;
  /* color: #ffffff; */

  ///////////
  position: relative;
  margin: auto;
  padding: 12px 18px;
  transition: all 0.2s ease;
  border: none;
  background: none;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50px;
    background: #b1dae7;
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }
  span {
    position: relative;
    font-family: 'Ubuntu', sans-serif;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: #234567;
  }
  svg {
    position: relative;
    top: 0;
    margin-left: 10px;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #234567;
    stroke-width: 2;
    transform: translateX(-5px);
    transition: all 0.3s ease;
  }
  :hover:before {
    width: 100%;
    background: #b1dae7;
  }
  :hover svg {
    transform: translateX(0);
    transform: rotate(0.25turn);
  }
  &.active {
    transform: scale(0.95);

    svg {
      transform: translateX(0);
      transform: rotate(0.25turn);
    }
    :before {
      width: 100%;
      background: #b1dae7;
    }
  }
`;

export const BackLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  margin-left: 25px;
  border: 2px solid rgb(255, 255, 255);
  padding: 5px;
  display: inline-flex;
  border-radius: 8px;
  transition: all 0.4s ease;

  :hover {
    color: #234567;
    border: 2px solid #b1dae7;
    background-color: #b1dae7;
  }
  :hover svg {
    transform: scale(1.2);
  }
`;

export const AiOutlineArrowLeftSt = styled(AiOutlineArrowLeft)`
  padding-right: 8px;
  width: 18px;
  height: 18px;
`;
