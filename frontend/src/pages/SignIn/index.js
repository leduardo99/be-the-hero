import React, { useContext } from "react";
import { FiLogIn } from "react-icons/fi";
import { TiAdjustBrightness } from "react-icons/ti";

import { AppContext } from "../../App";

import { Container, FormSection } from "./styles";

import logoImg from "../../assets/logo.svg";
import herosImg from "../../assets/heroes.png";

export default function SignIn() {
  const toggleTheme = useContext(AppContext);

  return (
    <Container>
      <FormSection>
        <img src={logoImg} alt="Be The Hero" />

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID" />
          <button type="submit" className="button">
            Entrar
          </button>

          <div>
            <a href="/register">
              <FiLogIn size={16} color="#e02041" />
              Não tenho cadastro
            </a>

            <TiAdjustBrightness
              size={30}
              color="#e02041"
              onClick={toggleTheme}
            />
          </div>
        </form>
      </FormSection>

      <img src={herosImg} alt="heros" />
    </Container>
  );
}
