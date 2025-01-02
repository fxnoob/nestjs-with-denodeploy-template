import { Controller, Get, Post, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AppService } from './app.service.ts';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get Hello World Message', description: 'Returns a Hello World message.' })
  @ApiResponse({ status: 200, description: 'Successful response.', schema: { example: 'Hello World!' } })
  getHello(): string {
    return this.appService.getHello();
  }
}
