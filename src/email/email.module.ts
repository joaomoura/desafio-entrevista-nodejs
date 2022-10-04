import { Module } from '@nestjs/common';
import EmailService from './email.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import EmailSchedulingController from './emailSchedule.controller';
import EmailSchedulingService from './emailScheduling.service';
import { EmailConfirmationService } from './emailConfirmation.service';
import { EmailConfirmationController } from './emailConfirmation.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import User from 'src/users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		TypeOrmModule.forFeature([User]),
		ConfigModule,
        JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => ({
				secret: configService.get('JWT_SECRET'),
				signOptions: {
					expiresIn: `${configService.get('JWT_EXPIRATION_TIME')}s`,
				},
			}),
		}),
	],
	controllers: [EmailSchedulingController, EmailConfirmationController],
	providers: [EmailService, EmailSchedulingService, EmailConfirmationService, UsersService],
	exports: [EmailService, EmailSchedulingService, EmailConfirmationService, UsersService]
})
export class EmailModule { }