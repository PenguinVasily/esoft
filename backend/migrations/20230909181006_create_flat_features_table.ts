import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema
        .createTable('flat_features', function (table) {
            table.increments('id')
            table.integer('flat_id').primary()
            table.decimal('price', 14, 2).notNullable()
            table.integer('rooms').notNullable()
            table.decimal('area_kitchen', 6, 2).notNullable()
            table.decimal('area_live', 6, 2).notNullable()
        })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema
        .dropTable('flat_features')
}

