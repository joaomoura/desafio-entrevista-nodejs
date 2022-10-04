// import { Injectable } from '@nestjs/common';
// import { Cron, Interval } from '@nestjs/schedule';
 
// @Injectable()
// export default class EmailSchedulingService {
//   @Cron('* * * * * *')
// 	@Interval(1000)
//   log() {
//     console.log('Hello world!');
//   }
// }

import { Injectable } from '@nestjs/common';
import EmailService from '../email/email.service';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import EmailScheduleDto from './dto/emailSchedule.dto';
import { ConfigService } from '@nestjs/config';
 
@Injectable()
export default class EmailSchedulingService {
  constructor(
		private readonly configService: ConfigService,
    private readonly emailService: EmailService,
    private readonly schedulerRegistry: SchedulerRegistry
  ) {}
 
  scheduleEmail(emailSchedule: EmailScheduleDto) {
    const date = new Date(emailSchedule.date);
    const job = new CronJob(date, () => {
      this.emailService.sendMail({
				from: this.configService.get('EMAIL_USER'),
        to: emailSchedule.recipient,
        subject: emailSchedule.subject,
        text: emailSchedule.content
      })
    });
 
    this.schedulerRegistry.addCronJob(`${Date.now()}-${emailSchedule.subject}`, job);
    job.start();
  }
}