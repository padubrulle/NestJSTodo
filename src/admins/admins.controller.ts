import { Controller, Get, Param } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { Admin } from './entities/admin.entity';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Get()
  getAll() {
    return this.adminsService.findAll();
  }

  @Get(':id')
  getById(@Param(':id') id: number): Promise<Admin> {
    return this.adminsService.findOne(id);
  }
}
