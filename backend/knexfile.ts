import type { Knex } from "knex";
import * as process from "process";
import {configDotenv} from "dotenv";

configDotenv({path: '../.env'})

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: process.env.POSTGRESQL_DSN,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "migrations"
    }
  },

  staging: {
    client: "postgresql",
    connection: process.env.POSTGRESQL_DSN,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: process.env.POSTGRESQL_DSN,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "migrations"
    }
  }
};

module.exports = config;
