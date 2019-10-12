import {
  Controller,
  Get,
  Render,
  Post,
  Body,
  Res,
  HttpException
} from '@nestjs/common';
import {
  UsersService
} from '../users/users.service';

@Controller('login')
export class LoginController {
  constructor(private readonly userService: UsersService) {
  }

  @Post('')
  loginMethod (
    @Res() respone,
    @Body()
    body: {
      username: string;
      password: string;
    },
  ) {

    if ((!body.username || !body.password)) {
      return respone.send({
        err: 'username and password are required values',
        code: 403
      })
    }

    this.userService.create({
      name: body.username,
      password: body.password,
      identification: ''
    }).then(data => {
      respone.send(data);
    }).catch(err => {
      respone.send(err.message || err);
      // respone.status(500).send(err);
      // throw new HttpException(err, 500);
    })
  }
  
  @Get()
  @Render('login')
  root() {
    return { message: 'Hello world!' };
  }
}
