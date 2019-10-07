import { Controller, Get, Post, Response, Body, Param } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { PerroCaliente } from '../perro-caliente/perro-caliente.schema';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Get('/')
  getUsers(@Response() response) {
    this.ventasService
      .findAll()
      .then(ventas => response.send(ventas))
      .catch(err => response.send(err));
  }

  @Get('/:id')
  getUserById(@Response() response, @Param('id') _id: string) {
    this.ventasService
      .findOne({ _id })
      .then(venta => response.send(venta))
      .catch(err => response.send(err));
  }

  @Post('/')
  createUser(
    @Response() respone,
    @Body()
    body: {
      fecha: Date;
      perros: PerroCaliente[];
    },
  ) {
    this.ventasService
      .create(body)
      .then(user => respone.send(user))
      .catch(err => respone.send(err));
  }
}
