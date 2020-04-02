import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import { AppContext } from "../../App";
import { Container, Header, Content } from "./styles";

import logoLight from "../../assets/logo.svg";
import logoDark from "../../assets/logo-dark.svg";

export default function Profile() {
  const { toggleTheme, theme } = useContext(AppContext);

  return (
    <Container>
      <Header>
        {theme.title === "light" && <img src={logoLight} alt="Be The Hero" />}
        {theme.title === "dark" && <img src={logoDark} alt="Be The Hero" />}

        <span>Bem vinda, APAD</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>

        <button type="button">
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>

      <h1>Casos cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$10</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$10</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$10</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>CASO:</strong>
          <p>Teste</p>

          <strong>DESCRIÇÃO:</strong>
          <p>Descrição teste</p>

          <strong>Valor:</strong>
          <p>R$10</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>
    </Container>
  );
}
