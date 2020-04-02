import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { TiAdjustBrightness } from "react-icons/ti";

import { AppContext } from "../../App";
import { Container, Content } from "./styles";

import logoLight from "../../assets/logo.svg";
import logoDark from "../../assets/logo-dark.svg";

export default function NewIncident() {
  const { toggleTheme, theme } = useContext(AppContext);

  return (
    <Container>
      <Content>
        <section>
          {theme.title === "light" && <img src={logoLight} alt="Be The Hero" />}
          {theme.title === "dark" && <img src={logoDark} alt="Be The Hero" />}

          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>

          <div>
            <Link className="back-link" to="/profile">
              <FiArrowLeft size={16} color="#e02041" />
              Voltar para home
            </Link>

            <TiAdjustBrightness
              size={30}
              color="#e02041"
              onClick={toggleTheme}
            />
          </div>
        </section>

        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Container>
  );
}
