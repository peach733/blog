import styled from 'styled-components';

export const FooterPageLayout = styled.footer`
  .false {
    display: none;
  }
  .true {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${(props) => props.theme.colors.semiBlue};
    margin-top: 5px;
    padding: 30px;
  }
`;

export const FooterFirst = styled.div`
  .false {
    display: none;
  }
  .true {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
  }
`;

export const FirstTitle = styled.p`
  .true {
    font-size: 2.4rem;
    font-weight: 600;
    color: ${(props) => props.theme.colors.strongBlue};
  }
`;
