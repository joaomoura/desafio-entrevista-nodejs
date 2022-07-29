import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { DatabaseModule } from './database/database.module';

import { AppService } from './app.service';
import { AppController } from './app.controller';

import { UsersModule } from './users/users.module';
import { CompaniesModule } from './companies/companies.module';
import { AutomobilesModule } from './automobiles/automobiles.module';

import { AuthenticationModule } from './authentication/authentication.module';
import { ParksModule } from './parks/parks.module';

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
