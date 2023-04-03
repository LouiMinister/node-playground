import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SlaveModule } from './slave.module';

@Module({
  imports: [SlaveModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  id = 'AppModule';
  constructor() {
    console.log('constructor', this.id);
  }
}
