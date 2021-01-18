"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class RefreshTokenController {
  /**
   * Refresh token for user.
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ auth, response, request }) {
    const refreshToken = request.input("refresh_token");

    const jwt = await auth
      .newRefreshToken()
      .generateForRefreshToken(refreshToken);

    return response.json(jwt);
  }
}

module.exports = RefreshTokenController;
