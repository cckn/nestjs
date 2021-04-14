import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ElecController } from './elec/elec.controller';
import { CtrController } from './ctr/ctr.controller';

@Module({
  imports: [],
  controllers: [AppController, ElecController, CtrController],
  providers: [AppService],
})
export class AppModule {}
