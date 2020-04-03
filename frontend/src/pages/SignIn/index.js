import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { TiAdjustBrightness } from "react-icons/ti";
import { Form } from "@unform/web";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

import { AppContext } from "../../App";

import Input from "../../components/Input";

import { Container, FormSection } from "./styles";

import logoLight from "../../assets/logo.svg";
import logoDark from "../../assets/logo-dark.svg";
import herosImg from "../../assets/heroes.png";

export default function SignIn() {
  const { toggleTheme, theme } = useContext(AppContext);
  const id = useSelector(state => state.auth.ongId);

  const initialData = { id };

  function handleSubmit() {}

  return (
    <Container>
      <FormSection>
        {theme.title === "light" && <img src={logoLight} alt="Be The Hero" />}
        {theme.title === "dark" && <img src={logoDark} alt="Be The Hero" />}

        <Form onSubmit={handleSubmit} initialData={initialData}>
          <h1>Faça seu logon</h1>

          <Input name="id" placeholder="Sua ID" />
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
        </Form>
      </FormSection>

      <img src={herosImg} alt="heros" />
    </Container>
  );
}
