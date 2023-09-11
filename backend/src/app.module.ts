import { Module } from '@nestjs/common';
import { FlatsModule } from './flats/flats.module';

@Module({
  imports: [FlatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
