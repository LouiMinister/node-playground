import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hi')
  getHi(): string {
    return 'hi';
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
