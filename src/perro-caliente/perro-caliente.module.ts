import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PerroCalienteController } from './perro-caliente.controller';
import { PerroCalienteService } from './perro-caliente.service';
import { PerroCalienteSchema } from './perro-caliente.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PerroCaliente', schema: PerroCalienteSchema },
    ]),
  ],
  controllers: [PerroCalienteController],
  providers: [PerroCalienteService],
})
export class PerroCalienteModule {}
