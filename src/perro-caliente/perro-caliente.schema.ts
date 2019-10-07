import * as mongoose from 'mongoose';

export const PerroCalienteSchema = new mongoose.Schema({
  nombre: String,
  ingredientes: Array,
  precio: Number,
  descuentoPorcentual: Number,
});

export interface PerroCaliente {
  _id: string;
  nombre: string;
  ingredientes: object[];
  precio: number;
  descuentoPorcentual: number;
}
