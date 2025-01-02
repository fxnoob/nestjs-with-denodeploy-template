import { Module, MiddlewareConsumer } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AppController } from './app.controller.ts';
import { AppService } from './app.service.ts';
import { AppConfigModule } from './config/config.module.ts';
import { CountryBlockMiddleware } from './rate-limit.middleware.ts';
import { SocketGateway } from './socket/socket.gateway.ts';


@Module({
  imports: [
    AppConfigModule,
    LoggerModule.forRoot()
  ],
  controllers: [AppController],
  providers: [AppService, SocketGateway],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CountryBlockMiddleware).forRoutes('*'); // Apply to all routes
  }
}
