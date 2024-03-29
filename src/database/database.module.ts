import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import DatabaseLogger from './databaseLogger';
import { Automobile } from 'src/automobiles/automobile.entity';
import { Company } from 'src/companies/company.entity';
import { Park } from 'src/parks/park.entity';
import User from 'src/users/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        logger: new DatabaseLogger(),
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('MYSQL_ROOT_PASSWORD'),
        database: configService.get('MYSQL_DATABASE'),
        entities: [
          User, 
          Automobile, 
          Company, 
          Park
        ],
        synchronize: true,
        autoLoadEntities: true
      })
    }),
  ],
})
export class DatabaseModule {}
