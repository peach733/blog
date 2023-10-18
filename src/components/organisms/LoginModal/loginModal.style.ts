import styled from 'styled-components';
import LoginBG from '../../../styles/img/AdobeStock_567030957_Preview.png';

export const LoginModalLayout = styled.div`
  width: calc(100vw - 300px);
  height: 500px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.theme.shadow.defaultShadow};
  border-radius: 10px;
  border: none;
  background: ${(props) => props.theme.colors.white};
  margin: 30px;
`;

export const ModalContent = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  border: none;
  border-radius: 10px;
  overflow: hidden;
  gap: 20px;

  background-color: white;
  background-image: url(${LoginBG});
  background-position: right bottom;
  background-repeat: no-repeat;
  background-size: contain;
`;

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 30px;
  margin: 20px;
  gap: 30px;

  input {
    width: 200px;
    height: 30px;
    background: ${(props) => props.theme.colors.white};
    border: none;
    border-radius: 5px;
    box-shadow: ${(props) => props.theme.shadow.defaultShadow};
  }
`;

export const LoginBtn = styled.button`
  width: 200px;
  height: 50px;
  background: none;
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.strongBlue};
  border: 1px solid ${(props) => props.theme.colors.defaultColor};
  border-radius: 10px;
  box-shadow: ${(props) => props.theme.shadow.defaultShadow};
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.colors.defaultColor};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const LoginTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.strongBlue};
`;

export const LoginInputText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${(props) => props.theme.colors.strongBlue};
`;
