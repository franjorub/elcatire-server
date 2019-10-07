import { Controller, Post, Get, Res, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/')
  getUsers(@Res() response) {
    this.usersService
      .findAll()
      .then(users => response.send(users))
      .catch(err => response.send(err));
  }

  @Get('/:id')
  getUserById(@Res() response, @Param('id') _id: string) {
    this.usersService
      .findOne({ _id })
      .then(user => response.send(user))
      .catch(err => response.send(err));
  }

  @Post('/')
  createUser(
    @Res() respone,
    @Body()
    body: {
      name: string;
      identification: string;
      password: string;
    },
  ) {
    this.usersService
      .create(body)
      .then(user => respone.send(user))
      .catch(err => respone.send(err));
  }
}
