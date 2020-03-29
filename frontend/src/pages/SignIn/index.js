import React from "react";
import { FiLogIn } from "react-icons/fi";

import { Container, FormSection } from "./styles";

import logoImg from "../../assets/logo.svg";
import herosImg from "../../assets/heroes.png";

export default function SignIn() {
  return (
    <Container>
      <FormSection>
        <img src={logoImg} alt="Be The Hero" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID" />
          <button type="submit" className="button">Entrar</button>

          <a href="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </a>
        </form>
      </FormSection>

      <img src={herosImg} alt="heros" />
    </Container>
  );
}
