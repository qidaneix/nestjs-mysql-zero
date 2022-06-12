import { Controller, Get } from '@nestjs/common';
import { DBService } from './db.service';

@Controller()
export class DBController {
  constructor(private readonly dbService: DBService) {}

  @Get('/users')
  async getUsers() {
    return await this.dbService.findAll();
  }
}
