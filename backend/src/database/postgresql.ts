import {Injectable} from "@nestjs/common";
import knex, {Knex} from "knex";


@Injectable()
export class PostgreSQL {
    client: Knex;

    constructor() {
        this.client = knex({
            client: 'postgresql',
            connection: 'postgresql://admin:admin@localhost:5432/esoft'
        })
    }
}
