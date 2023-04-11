import styled from '@emotion/styled';

import ContentLoader from 'react-content-loader';

export const WrapperFadingLoader = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  width: 800px;
  margin: 0 auto;
`;

export const ContentLoaderSt = styled(ContentLoader)`
  margin-bottom: 18px;
  /* margin-left: 50%; */
  border: 1px solid rgba(227, 227, 227, 1);
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  border-radius: 8px;
`;
