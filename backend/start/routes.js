"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.post("sessions/:id", "SessionController.store");
Route.post("ongs", "OngController.store");

Route.group("protected routes", () => {
  Route.get("ongs", "OngController.index");
  Route.get("ongs/:id", "OngController.show");
  Route.put("ongs/:id", "OngController.update");
  Route.delete("ongs/:id", "OngController.destroy");

  Route.post("incidents", "IncidentController.store");
  Route.get("incidents", "IncidentController.index");
  Route.get("incidents/:id", "IncidentController.show");
  Route.get("incidents/:id", "IncidentController.update");
  Route.get("incidents/:id", "IncidentController.destroy");
}).middleware("auth");
