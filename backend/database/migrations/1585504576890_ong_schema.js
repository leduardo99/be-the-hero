'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OngSchema extends Schema {
  up () {
    this.create('ongs', (table) => {
      table.string('id').primary()
      table.string('name').notNullable()
      table.string('email').notNullable()
      table.string('whatsapp').notNullable()
      table.string('city').notNullable()
      table.string('uf', 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('ongs')
  }
}

module.exports = OngSchema
