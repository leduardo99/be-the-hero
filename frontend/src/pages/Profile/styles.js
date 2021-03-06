import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 80px;
    margin-bottom: 24px;
    color: ${(props) => props.theme.colors.secondary};
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;

    li {
      background: ${(props) => props.theme.colors.card};
      padding: 24px;
      border-radius: 8px;
      position: relative;
      max-width: 548px;

      word-break: break-all;

      strong {
        display: block;
        margin-bottom: 16px;
        color: ${(props) => props.theme.colors.secondary};
      }

      p {
        color: ${(props) => props.theme.colors.paragraph};
        line-height: 21px;
        font-size: 16px;
      }

      p + strong {
        margin-top: 32px;
      }

      button {
        position: absolute;
        right: 24px;
        top: 24px;
        border: 0;
        background: transparent;

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 20px;
    margin-left: 24px;
    color: ${(props) => props.theme.colors.secondary};
  }

  img {
    height: 64px;
  }

  a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
  }

  button {
    height: 60px;
    width: 60px;
    border-radius: 8px;
    border: 1px solid #dcdce6;
    background: transparent;
    margin-left: 6px;

    &:hover {
      border-color: #999;
      transition: border-color 0.2s;
    }
  }
`;
