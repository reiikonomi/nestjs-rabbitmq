import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { RqmModule } from '@app/common';
import * as joi from 'joi';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    validationSchema: joi.object({
      RABBIT_MQ_URI: joi.string().required(),
      RABBIT_MQ_BILLING_QUEUE: joi.string().required(),
    })
  }), RqmModule],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule { }
