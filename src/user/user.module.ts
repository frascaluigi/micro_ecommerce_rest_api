import { Module } from '@nestjs/common';
import { OrderModule } from '../order/order.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports:[OrderModule],
  controllers: [UserController],
  providers: [UserService],
  exports:[UserService]
})
export class UserModule {}
