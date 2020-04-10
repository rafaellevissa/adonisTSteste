import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class People extends BaseSchema {
  protected $tableName = 'people'

  public async up () {
    this.schema.createTable(this.$tableName, (table) => {
      table.increments('id')
      table.string('nome')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.$tableName)
  }
}
