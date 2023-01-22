import { Module } from '@nestjs/common';
import { ItemModule } from '../item/item.module';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  imports:[ItemModule],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService]
})
export class OrderModule {}
