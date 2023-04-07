import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormsSt = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  /* max-width: 300px; */

  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
  padding-left: 5px;
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  width: 36px;
  height: 36px;
  border: 0;
  background-image: url('https://www.svgrepo.com/show/511119/search-magnifying-glass.svg');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #fff;

  :hover {
    opacity: 1;
  }
`;

export const ContainerForm = styled.div`
  border-bottom: 2px solid rgb(181, 181, 181);
`;
