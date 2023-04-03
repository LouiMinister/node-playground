import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class Slave2Service
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  id = 'Slave2Service';
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
