import {Injectable} from "@nestjs/common";
import knex, {Knex} from "knex";
import process from "process";


@Injectable()
export class PostgreSQL {
    client: Knex;

    private static getConnectionString() {
        if (process.env.POSTGRESQL_DSN) {
            return process.env.postgresql_dsn
        }

        const host = process.env.POSTGRESQL_HOST
        const port = process.env.POSTGRESQL_PORT
        const user = process.env.POSTGRESQL_USER
        const password = process.env.POSTGRESQL_PASSWORD
        const database = process.env.POSTGRESQL_DATABASE

        return `postgresql://${user}:${password}@${host}:${port}/${database}`
    }

    constructor() {
        this.client = knex({
            client: 'postgresql',
            connection: 'postgresql://admin:admin@localhost:5432/esoft'
        })
    }
}
