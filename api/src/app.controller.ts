import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private appService: AppService

  ) {}

  @Get()
  async getNames(){
    return await this.appService.getNames();
  }

  @Post("/user")
  async create(@Body('firstName') firstName: string, @Body('lastName') lastName: string) {
    return await this.appService.saveName(firstName, lastName);
  }
}
