import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';


@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    return 'Hello World!';
  }
}
