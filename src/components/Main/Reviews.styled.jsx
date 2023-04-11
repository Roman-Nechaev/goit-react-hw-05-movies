import styled from '@emotion/styled';

export const Container = styled.div`
  width: 70%;

  margin: 0 auto;
  margin-top: 50px;

  padding-right: 20px;
  padding-left: 20px;

  border: 4mm dashed rgba(50, 220, 64, 0.358);
  border-radius: 8px;
`;

export const ReviewsList = styled.ul``;
export const ReviewsItem = styled.li`
  margin-bottom: 25px;
  /* border: 2px solid rgb(141, 141, 141); */
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

export const Author = styled.p`
  color: #ff0000;
  font-weight: 700;
  padding-top: 8px;
  padding-left: 35px;
  margin: 0;

  font-size: 20px;
  line-height: 20px;

  letter-spacing: 0.5px;
`;

export const AuthorItem = styled.span`
  color: #2100b5;

  font-size: 18px;
  line-height: 20px;
  font-weight: 700;
`;

export const Character = styled.p`
  color: #898989;
  font-style: oblique;
  padding: 8px;
  font-weight: bold;
`;

export const NoReviews = styled.p`
  padding-top: 25px;
  color: #4e4e4e;
  font-size: 30px;
  line-height: 26px;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-align: center;
`;
