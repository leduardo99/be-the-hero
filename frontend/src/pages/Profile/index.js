import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";

import { AppContext } from "../../App";
import { Container, Header } from "./styles";

import AuthActions from "../../store/ducks/auth";
import IncidentsActions from "../../store/ducks/incidents";

import logoLight from "../../assets/logo.svg";
import logoDark from "../../assets/logo-dark.svg";

export default function Profile() {
  const { theme } = useContext(AppContext);

  const ong = useSelector((state) => state.ong);
  const incidents = useSelector((state) => state.incidents);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(AuthActions.signOut());
  }

  function handleRemoveIncident(id) {
    dispatch(IncidentsActions.removeIncidentRequest(id));
  }

  useEffect(() => {
    dispatch(IncidentsActions.incidentsRequest());
  }, []);

  return (
    <Container>
      <Header>
        {theme.title === "light" && <img src={logoLight} alt="Be The Hero" />}
        {theme.title === "dark" && <img src={logoDark} alt="Be The Hero" />}

        <span>Bem vinda, {ong.name}</span>

        <Link className="button" to="/incidents/new">
          Cadastrar novo caso
        </Link>

        <button type="button" onClick={handleSignOut}>
          <FiPower size={18} color="#e02041" />
        </button>
      </Header>

      <h1>Casos cadastrados</h1>

      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>

            <strong>DESCRIÇÃO:</strong>
            <p>{incident.description}</p>

            <strong>Valor:</strong>
            <p>R${incident.value.toLocaleString()}</p>

            <button
              type="button"
              onClick={() => handleRemoveIncident(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
