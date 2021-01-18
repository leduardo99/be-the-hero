"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Yup = require("yup");
const crypto = require("crypto");

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} Ong*/
const Ong = use("App/Models/Ong");

/**
 * Resourceful controller for interacting with ongs
 */
class OngController {
  /**
   * Show a list of all ongs.
   * GET ongs
   *
   * @param {Response} ctx.response
   */
  async index({ response }) {
    const ongs = await Ong.all();

    return response.json(ongs);
  }

  /**
   * Create/save a new ong.
   * POST ongs
   *
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.body;

    const validation = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .required()
        .email(),
      whatsapp: Yup.string().required(),
      city: Yup.string().required(),
      uf: Yup.string().required()
    });

    if (!(await validation.validate(data))) {
      return response
        .status(400)
        .json({ message: "The fields provided are invalid" });
    }

    const id = crypto.randomBytes(4).toString("HEX");

    await Ong.create({ ...data, id });

    return response.json({ id });
  }

  /**
   * Display a single ong.
   * GET ongs/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.response
   */
  async show({ params, response }) {
    const ong = await Ong.findBy("id", params.id);

    if (!ong) {
      return response
        .status(404)
        .json({ message: "The informed ONG does not have a register" });
    }

    return response.json(ong);
  }

  /**
   * Update ong details.
   * PUT or PATCH ongs/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    const ong = await Ong.findOrFail(params.id);

    ong.merge(request.body);
    await ong.save();

    return response.json(ong);
  }

  /**
   * Delete a ong with id.
   * DELETE ongs/:id
   *
   * @param {object} ctx
   */
  async destroy({ params }) {
    const ong = await Ong.findOrFail(params.id);

    await ong.delete();

    return response.status(204).send();
  }
}

module.exports = OngController;
