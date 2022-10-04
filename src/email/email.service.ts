import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import * as Mail from 'nodemailer/lib/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export default class EmailService {
	private nodemailerTransport: Mail;

	constructor(
		private readonly configService: ConfigService
	) {
		this.nodemailerTransport = createTransport({
			pool: true,
			host: configService.get('EMAIL_SERVICE'),
			port: configService.get('EMAIL_PORT'),
			secure: true, // upgrade later with STARTTLS
			auth: {
				user: configService.get('EMAIL_USER'),
				pass: configService.get('EMAIL_PASSWORD'),
			},
			debug: true, // show debug output
			logger: true // log information in console
			// service: configService.get('EMAIL_SERVICE'),
			// auth: {
			// 	user: configService.get('EMAIL_USER'),
			// 	pass: configService.get('EMAIL_PASSWORD'),
			// }
		});

	}

	sendMail(options: Mail.Options) {
		return this.nodemailerTransport.sendMail(options);
	}
}