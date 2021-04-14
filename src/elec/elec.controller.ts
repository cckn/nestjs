import { Controller, Get, Req } from '@nestjs/common';

@Controller('elec')
export class ElecController {
  @Get()
  findAll(): object {
    return { name: 'asdasd' };
  }
}
