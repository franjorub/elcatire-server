import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.schema';

@Injectable()
// mario dice que esto esta mal, ANIMAL es en PLURAR XD
// punto extran por el modelo injectado correctamente. D:
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly UsersSchema: Model<Users>,
  ) {}

  async create(user: {
    name: string;
    identification: string;
    password: string;
  }): Promise<Users> {
    const createdUser = new this.UsersSchema({ ...user });
    const result = await createdUser.save();
    return result;
  }

  async findAll(): Promise<Users[]> {
    return await this.UsersSchema.find().exec();
  }

  async findOne(key: { [findKey: string]: string }): Promise<Users> {
    return await this.UsersSchema.findOne(key).exec();
  }
}
