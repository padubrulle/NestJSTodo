import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Admin } from './admins/entities/admin.entity';
import { AdminsModule } from './admins/admins.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5431,
      username: 'postgres',
      password: 'I4mP0stGr3sPW',
      schema: 'public',
      database: 'ecommerce',
      entities: [Admin],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AdminsModule,
    TodosModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
