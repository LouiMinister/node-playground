import {
  BeforeApplicationShutdown,
  Controller,
  Get,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  id = 'AppController';
  constructor(private readonly appService: AppService) {
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
