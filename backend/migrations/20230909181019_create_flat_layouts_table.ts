import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
        .createTable('flat_layouts', function (table) {
            table.increments('id')
            table.integer('flat_id').primary()
            table.string('layout_image', 150).notNullable()
        })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema
        .dropTable('flat_layouts')
}


