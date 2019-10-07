import { Controller, Get, Post, Body, Response } from '@nestjs/common';
import { PerroCalienteService } from './perro-caliente.service';
@Controller('perro-caliente')
export class PerroCalienteController {
  constructor(private readonly perroCalienteService: PerroCalienteService) {}

  @Get()
  getAll(@Response() response) {
    this.perroCalienteService
      .findAll()
      .then(perros => response.send(perros))
      .catch(err => response.send(err));
  }

  @Post()
  createPerro(
    @Response() response,
    @Body()
    perro: {
      nombre: string;
      ingredientes: object[];
      precio: number;
      descuentoPorcentual: number;
    },
  ) {
    this.perroCalienteService
      .create(perro)
      .then(newPerro => response.send(newPerro))
      .catch(err => response.send(err));
  }
}
