import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(identification: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({ identification });
    console.log(user);
    if (user && user.password === password) {
      const { password, ...result } = user;
      console.log(result);
      return result;
    }
    return null;
  }
}
