import { Module } from '@nestjs/common';
import { AdminsModule } from './admins.module';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';

@Module({
  imports: [AdminsModule],
  providers: [AdminsService],
  controllers: [AdminsController],
})
export class AdminHttpModule {}
