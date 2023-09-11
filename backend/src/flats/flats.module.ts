import { Module } from '@nestjs/common';
import { FlatsService } from './flats.service';
import { FlatsController } from './flats.controller';
import {FlatsRepository} from "./flats.repository";
import {PostgreSQL} from "../database/postgresql";

@Module({
  controllers: [FlatsController],
  providers: [FlatsService, FlatsRepository, PostgreSQL],
})
export class FlatsModule {}
