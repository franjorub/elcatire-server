import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PerroCaliente } from './perro-caliente.schema';

@Injectable()
export class PerroCalienteService {
  constructor(
    @InjectModel('PerroCaliente')
    private readonly perroCalienteSchema: Model<PerroCaliente>,
  ) {}

  async create(perro: {
    nombre: string;
    ingredientes: object[];
    precio: number;
    descuentoPorcentual: number;
  }): Promise<PerroCaliente> {
    const createdPerroCaliente = new this.perroCalienteSchema(perro);
    const result = await createdPerroCaliente.save();
    console.log(result);
    return result;
  }

  async findAll(): Promise<PerroCaliente[]> {
    return await this.perroCalienteSchema.find().exec();
  }
}
