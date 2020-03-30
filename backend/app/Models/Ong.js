'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class Ong extends Model {
  incidents () {
    return this.hasMany('App/Models/Incident')
  }
}

module.exports = Ong
