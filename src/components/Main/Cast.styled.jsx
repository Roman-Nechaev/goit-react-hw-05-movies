import styled from '@emotion/styled';

export const CastScrolled = styled.div`
  /* position: relative;
  top: 0;
  left: 0; */
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
`;

export const Ol = styled.ol`
  overflow-y: hidden;
  overflow-x: scroll;
  margin-left: -10px;
  margin-top: -10px;
  padding-bottom: 10px;
  & {
    list-style-type: none;
    list-style-position: inside;
    margin: 0;
    padding: 0;
    display: flex;
    position: relative;
    top: 0;
    left: 0;
  }
  & {
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 10px;
    padding-inline-start: 10px;
  }
`;

export const LiCard = styled.li`
  margin-top: 10px;
  margin-bottom: 25px;
  margin-left: 10px;
  margin-right: 4px;
  border: 1px solid rgba(227, 227, 227, 1);
  padding-bottom: 10px;
  border-radius: 8px;
  overflow: hidden;

  & {
    min-width: 140px;
    width: 140px;
    background-color: #fff;
  }

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Img = styled.img`
  width: 100%;
  height: 65%;
`;

export const Name = styled.p`
  font-weight: bold;
  padding-top: 10px;
  padding-left: 8px;
  padding-bottom: 0;
`;

export const TitleCast = styled.h3`
  margin: 0;
  padding-left: 25px;
  padding-bottom: 10px;
  font-size: 30px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 0.5px;

  border-bottom: 1px solid rgba(139, 139, 139, 0.346);
`;

export const Character = styled.p`
  font-size: 0.9em;
  color: #4e4e4e;
  padding-left: 8px;
`;
