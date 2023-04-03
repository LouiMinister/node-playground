import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';

@Injectable()
export class Slave1Service
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  id = 'Slave1Service';
  constructor() {
    console.log('constructor', this.id);
  }
  async onModuleInit(): Promise<any> {
    console.log('onModuleInit', this.id);
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log('after 3 seconds...');
        resolve('');
      }, 3000);
    });
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
