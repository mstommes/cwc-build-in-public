import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Name } from './name.entity';

@Injectable()
export class AppService {
  constructor(

    @InjectRepository(Name)
    private nameRespository: Repository<Name>

  ) { }

  async saveName(firstName:string, lastName: string) {
    await this.nameRespository.save({ first_name: firstName, last_name: lastName})
    return await this.getNames()
  }

  async getNames() {
    return await this.nameRespository.find()
  }
}
