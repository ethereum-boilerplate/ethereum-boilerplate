import styled from 'styled-components';
import { resetCSS } from '@ethereum-boilerplate-v2/ui';

const DivStyled = styled.div`
  ${resetCSS};
  width: 430px;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
  border: 1px solid #e7eaf3;
  border-radius: 1rem;
  font-size: 16px;
  font-weight: 500;
  align-item: center;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
`;

const CardStyled = styled.div`
  ${resetCSS};
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5rem 1.2rem rgb(189 197 209 / 20%);
  border: 1px solid #e7eaf3;
  border-radius: 1rem;
  font-size: 16px;
  font-weight: 500;
  align-item: center;
  padding: 0.8rem;
`;
const ButtonInputDivStyled = styled.div`
  ${resetCSS};
  display: flex;
  flex: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const ButtonStyled = styled.button`
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.6rem;
  padding: 5px 10px;
  font-weight: 500;
  font-size: 17px;
  gap: 7px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export default {
  DivStyled,
  CardStyled,
  ButtonInputDivStyled,
  ButtonStyled,
};
