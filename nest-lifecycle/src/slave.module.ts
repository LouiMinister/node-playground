import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Slave1Service } from './slave1.service';
import { Slave2Service } from './slave2.service';

@Module({
  imports: [],
  controllers: [],
  providers: [Slave1Service, Slave2Service],
  exports: [Slave1Service, Slave2Service],
})
export class SlaveModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  id = 'SlaveModule';
  constructor() {
    console.log('constructor', this.id);
  }

  onModuleInit(): any {
    console.log('onModuleInit', this.id);
  }

  onApplicationBootstrap(): any {
    console.log('onApplicationBootstrap', this.id);
  }

  onModuleDestroy(): any {
    console.log('onModuleDestroy', this.id);
  }

  beforeApplicationShutdown(signal?: string): any {
    console.log('beforeApplicationShutdown', this.id);
  }

  onApplicationShutdown(signal?: string): any {
    console.log('onApplicationShutdown', this.id);
  }
}
