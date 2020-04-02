import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { TiAdjustBrightness } from "react-icons/ti";

import { AppContext } from "../../App";

import { Container, FormSection } from "./styles";

import logoLight from "../../assets/logo.svg";
import logoDark from "../../assets/logo-dark.svg";
import herosImg from "../../assets/heroes.png";

export default function SignIn() {
  const { toggleTheme, theme } = useContext(AppContext);

  return (
    <Container>
      <FormSection>
        {theme.title === "light" && <img src={logoLight} alt="Be The Hero" />}
        {theme.title === "dark" && <img src={logoDark} alt="Be The Hero" />}

        <form>
          <h1>Faça seu logon</h1>

          <input placeholder="Sua ID" />
          <button type="submit" className="button">
            Entrar
          </button>

          <div>
            <Link className="back-link" to="/register">
              <FiLogIn size={16} color="#e02041" />
              Não tenho cadastro
            </Link>

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
