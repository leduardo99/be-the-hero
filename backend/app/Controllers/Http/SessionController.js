"use strict";

const Ong = use("App/Models/Ong");

class SessionController {
  async store({ auth, params, response }) {
    const ong = await Ong.find(params.id);

    const jwt = await auth.withRefreshToken().generate(ong);

    return response.json({ jwt, ong });
  }
}

module.exports = SessionController;
