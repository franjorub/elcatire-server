import * as mongoose from 'mongoose';
import { PerroCaliente } from '../perro-caliente/perro-caliente.schema';

export const VentasSchema = new mongoose.Schema({
  fecha: Date,
  perros: Array,
  total: Number,
});

export interface Ventas {
  fecha: Date;
  perros: mongoose.Model<PerroCaliente[]>;
}
