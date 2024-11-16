import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
  id?: number;
  email?: string;
  password?: string;
  name?: string;
  role?: string;
}
