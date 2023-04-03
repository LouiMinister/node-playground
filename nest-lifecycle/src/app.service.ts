import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { Slave2Service } from './slave2.service';

@Injectable()
export class AppService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  id = 'AppService';
  constructor(private readonly slave2service: Slave2Service) {
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
