import styled, { css } from 'styled-components';

export const ButtonStylePlh = css`
  display: inline-block;
  padding: 13px 25px;
  background: #fc842d;//orange
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #ffffff;
  cursor: pointer;

  &:focus {
    background: #6ded5b; //orange f56905
  }
  &:disabled {
    background: #9b9faa; //gray
    box-shadow: 0px 4px 10px #9b9faa;
  }
`;

export const Btn = styled.button`
  ${ButtonStylePlh}
  /* display: inline-block;
  padding: 13px 25px;
  background: #fc842d;
  box-shadow: 0px 4px 10px rgba(252, 132, 45, 0.5);
  border-radius: 30px;
  border: none;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.214;
  letter-spacing: 0.04em;
  color: #ffffff;
  cursor: pointer; */
    /* background: #6ded5b;//green */
`;
