import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Documents extends BaseSchema {
  protected tableName = 'documents'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('text').notNullable()
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('text')
    })
  }
}
