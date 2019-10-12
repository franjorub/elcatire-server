import * as mongoose from 'mongoose';
import { PerroCaliente } from '../perro-caliente/perro-caliente.schema';

export const VentasSchema = new mongoose.Schema({
  fecha: Date,
  perros: Array,
  total: Number,
  cliente: Object,
});

export interface Ventas {
  fecha: Date;
  perros: mongoose.Model<PerroCaliente[]>;
  cliente: {
    nombre: string;
    genero: string;
    cedula: string;
  };
}
