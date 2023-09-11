import {Injectable} from "@nestjs/common";
import knex, {Knex} from "knex";
import {configDotenv} from "dotenv";


configDotenv({path: '../../../.env'})


@Injectable()
export class PostgreSQL {
    client: Knex;

    constructor() {
        this.client = knex({
            client: 'postgresql',
            connection: process.env.POSTGRESQL_DSN
        })
    }
}
