import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { TiAdjustBrightness } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { Form } from "@unform/web";

import { AppContext } from "../../App";

import Input from "../../components/Input";
import TextArea from "../../components/TextArea";

import { Container, Content } from "./styles";

import IncidentsActions from "../../store/ducks/incidents";

import logoLight from "../../assets/logo.svg";
import logoDark from "../../assets/logo-dark.svg";

export default function NewIncident() {
  const { toggleTheme, theme } = useContext(AppContext);

  const dispatch = useDispatch();

  function handleNewIncident(data) {
    dispatch(IncidentsActions.newIncidentRequest(data));
  }

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

        <Form onSubmit={handleNewIncident}>
          <Input name="title" placeholder="Título do caso" />
          <TextArea name="description" placeholder="Descrição" />
          <Input name="value" type="number" placeholder="Valor em reais" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}
