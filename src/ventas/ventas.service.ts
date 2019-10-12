import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ventas } from './ventas.schema';
import { PerroCaliente } from '../perro-caliente/perro-caliente.schema';

@Injectable()
export class VentasService {
  constructor(
    @InjectModel('Ventas') private readonly ventasSchema: Model<Ventas>,
  ) {}

  async create(venta: {
    fecha: Date;
    perros: PerroCaliente[];
    cliente: {
      nombre: string;
      genero: string;
      cedula: string;
    };
  }): Promise<Ventas> {
    const createdVenta = new this.ventasSchema(venta);
    const result = await createdVenta.save();
    console.log(result);
    return result;
  }

  async findAll(): Promise<Ventas[]> {
    return await this.ventasSchema.find().exec();
  }

  async findOne(key: { [findKey: string]: string }): Promise<Ventas> {
    console.log(key);
    return await this.ventasSchema.findOne(key).exec();
  }
}
