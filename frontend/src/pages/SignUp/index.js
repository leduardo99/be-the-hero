import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { TiAdjustBrightness } from "react-icons/ti";

import { AppContext } from "../../App";
import { Container, Content } from "./styles";

import logoLight from "../../assets/logo.svg";
import logoDark from "../../assets/logo-dark.svg";

export default function SignUp() {
  const { toggleTheme, theme } = useContext(AppContext);

  return (
    <Container>
      <Content>
        <section>
          {theme.title === "light" && <img src={logoLight} alt="Be The Hero" />}
          {theme.title === "dark" && <img src={logoDark} alt="Be The Hero" />}

          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </p>

          <div>
            <Link className="back-link" to="/">
              <FiArrowLeft size={16} color="#e02041" />
              Já tenho cadastro
            </Link>

            <TiAdjustBrightness
              size={30}
              color="#e02041"
              onClick={toggleTheme}
            />
          </div>
        </section>

        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="WhatsApp" />

          <div>
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Container>
  );
}
