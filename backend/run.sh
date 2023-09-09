#!/bin/sh

knex migrate:latest || exit 1
npm run start:prod