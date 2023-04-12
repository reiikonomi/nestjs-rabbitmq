import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BillingService
{
  private readonly logger = new Logger(BillingService.name);
  getHello(): string
  {
    return 'Hello World!';
  }

  bill(data: any)
  {
    console.log('Billing...', data);
    this.logger.log('Billing...', data);
  }
}
