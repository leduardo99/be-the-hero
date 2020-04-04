"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} Ong*/
const Incident = use("App/Models/Incident");

class ProfileController {
  /**
   * Show a list of all incidents per ong.
   * GET all incidents per ong
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index({ response, auth }) {
    const incidents = await Incident.query()
      .where("ong_id", "=", auth.user.id)
      .fetch();

    return response.json({ incidents });
  }
}

module.exports = ProfileController;
