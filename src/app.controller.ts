import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CurrentUser } from "./decorators/current'user.decorator";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/whoIAm')
  getWhoIAm(@CurrentUser() user: string): string {
    return user;
  }
}
