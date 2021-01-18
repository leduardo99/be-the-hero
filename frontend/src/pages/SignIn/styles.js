import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormSection = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  form {
    margin-top: 100px;

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
      color: ${props => props.theme.colors.foreground};
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 40px;
      
      > svg {
        cursor: pointer;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
