import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: ${props => props.theme.colors.background};
  box-shadow: 0 0 50px
    ${props =>
      props.theme.title === "light"
        ? "rgba(0, 0, 0, 0.1)"
        : "rgba(0, 0, 0, 0.3)"};
  border-radius: 8px;
  border: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    width: 100%;
    max-width: 380px;

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
      color: ${props => props.theme.colors.secondary};
    }

    p {
      font-size: 18px;
      color: ${props => props.theme.colors.paragraph};
      line-height: 32px;
    }

    > div {
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

  form {
    width: 100%;
    max-width: 450px;

    input, textarea {
      margin-top: 8px;
    }
  }
`;
