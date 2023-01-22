import { Injectable, OnApplicationBootstrap } from '@nestjs/common';

@Injectable()
export class AppService implements OnApplicationBootstrap {

  getHello(): string {
    return 'Welcome to Micro API REST E-commerce Project';
  }

  onApplicationBootstrap() {
    // console.log("bootstrap app service");
  }
}
