import React, { useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { TiAdjustBrightness } from "react-icons/ti";
import { Form } from "@unform/web";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { AppContext } from "../../App";

import Input from "../../components/Input";

import { Container, Content } from "./styles";

import AuthActions from "../../store/ducks/auth";

import logoLight from "../../assets/logo.svg";
import logoDark from "../../assets/logo-dark.svg";

export default function SignUp() {
  const formRef = useRef();

  const { toggleTheme, theme } = useContext(AppContext);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  async function handleSubmit(data) {
    try {
      setLoading(true);

      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required("O nome da ONG é obrigatório"),
        email: Yup.string()
          .required("O e-mail é obrigatório")
          .email("Informe um e-mail válido"),
        whatsapp: Yup.string().required("Informe um número para contato"),
        city: Yup.string().required("A cidade é obrigatória"),
        uf: Yup.string().required("A uf é obrigatória")
      });

      await schema.validate(data, {
        abortEarly: false
      });

      dispatch(AuthActions.signUpRequest(data));

      setLoading(false);
    } catch (error) {
      const validationErrors = {};
      if (error instanceof Yup.ValidationError) {
        error.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });

        formRef.current.setErrors(validationErrors);

        toast.error("Você deve preencher todos os campos!");

        setLoading(false);
      }

      toast.error("Ocorreu um erro, não foi possível concluir o cadastro!");
      setLoading(false);
    }
  }

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

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome da ONG" />
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="whatsapp" placeholder="WhatsApp" type="tel" />

          <div>
            <Input name="city" placeholder="Cidade" />
            <Input
              name="uf"
              placeholder="UF"
              maxLength={2}
              style={{ width: 80 }}
            />
          </div>

          <button className="button" type="submit" disabled={loading}>
            {!loading && "Cadastrar"}
            {loading && "Carregando ..."}
          </button>
        </Form>
      </Content>
    </Container>
  );
}
