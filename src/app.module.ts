import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database/database.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { AutomobilesModule } from './automobiles/automobiles.module';

import User from './users/user.entity';
import { Automobile } from './automobiles/automobile.entity';
import { Company } from './companies/company.entity';
import { AuthenticationModule } from './authentication/authentication.module';
import { ParksModule } from './parks/parks.module';
import { Park } from './parks/park.entity';

const entities = [User, Automobile, Company, Park];

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
        DATABASE_USER: Joi.string().required(),
        MYSQL_ROOT_PASSWORD: Joi.string().required(),
        MYSQL_DATABASE: Joi.string().required(),
        PORT: Joi.number(),
      })
    }),
    // TypeOrmModule.forRoot({
    //   type: process.env.DATABASE_TYPE as any,
    //   host: process.env.DATABASE_HOST,
    //   port: parseInt(process.env.DATABASE_PORT),
    //   username: process.env.DATABASE_USER,
    //   password: process.env.MYSQL_ROOT_PASSWORD,
    //   database: process.env.MYSQL_DATABASE,
    //   entities: entities,
    //   synchronize: true,
    // }),
    DatabaseModule,
    UsersModule,
    AuthenticationModule,
    CompaniesModule,
    AutomobilesModule,
    ParksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
