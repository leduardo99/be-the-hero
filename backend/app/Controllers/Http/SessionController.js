"use strict";

const Ong = use("App/Models/Ong");

class SessionController {
  async store({ auth, params }) {
    const ong = await Ong.find(params.id);

    const jwt = await auth.generate(ong);

    return jwt;
  }
}

module.exports = SessionController;
