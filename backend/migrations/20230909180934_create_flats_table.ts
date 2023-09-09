import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
        .createTable('flats', function (table) {
            table.increments('id')
            table.integer('floor').notNullable()
            table.integer('pos_on_floor').notNullable()
            table.decimal('area_total', 6, 2).notNullable()
        })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema
        .dropTable('flats')
}

