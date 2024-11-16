import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Admin } from './entities/admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminsService {
  constructor(
    @InjectRepository(Admin)
    private adminsRepository: Repository<Admin>,
    private dataSource: DataSource,
  ) {}

  findAll(): Promise<Admin[]> {
    return this.adminsRepository.find();
  }

  findOne(id: number): Promise<Admin | null> {
    return this.adminsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.adminsRepository.delete(id);
  }

  create(createAdminDto: CreateAdminDto) {
    return 'This action adds a new admin';
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }
}
