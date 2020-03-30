"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

const Yup = require("yup");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} Incident*/
const Incident = use("App/Models/Incident");

class IncidentController {
  /**
   * Show a list of all incidents.
   * GET incidents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index({ request, response }) {
    const { page = 1, pageSize = 5 } = request.get();

    const incidents = await Incident.query()
      .with("ong")
      .paginate(page, pageSize);

    return response.json(incidents);
  }

  /**
   * Create/save a new incident.
   * POST incidents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ auth, request, response }) {
    const data = request.body;

    const validation = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      value: Yup.number().required()
    });

    if (!(await validation.validate(data))) {
      return response
        .status(400)
        .json({ message: "The fields provided are invalid" });
    }

    const ong_id = auth.user.id;

    const { id } = await Incident.create({ ...data, ong_id });

    return response.json({ id });
  }

  /**
   * Display a single incident.
   * GET incidents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async show({ auth, params, response }) {
    const incident = await Incident.findOrFail(params.id);

    if (auth.user.id !== incident.ong_id) {
      return response.status(403).json({ message: "Operation not permitted." });
    }

    return response.json(incident);
  }

  /**
   * Update incident details.
   * PUT or PATCH incidents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const incident = await Incident.findOrFail(params.id);

    if (auth.user.id !== incident.ong_id) {
      return response.status(403).json({ message: "Operation not permitted." });
    }

    incident.merge(request.body);
    await incident.save();

    return response.json(incident);
  }

  /**
   * Delete a incident with id.
   * DELETE incidents/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async destroy({ params, auth, response }) {
    const incident = await Incident.findOrFail(params.id);

    if (auth.user.id !== incident.ong_id) {
      return response.status(403).json({ message: "Operation not permitted." });
    }

    await incident.delete();

    return response.status(204).send();
  }
}

module.exports = IncidentController;
