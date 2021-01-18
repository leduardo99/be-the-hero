"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Ong extends Model {
  incidents() {
    return this.hasMany("App/Models/Incident");
  }

  tokens() {
    return this.hasMany("App/Models/Token");
  }
}

module.exports = Ong;
