import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { VentasSchema } from './ventas.schema';
import { VentasController } from './ventas.controller';
import { VentasService } from './ventas.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Ventas', schema: VentasSchema }]),
  ],
  controllers: [VentasController],
  providers: [VentasService],
})
export class VentasModule {}
