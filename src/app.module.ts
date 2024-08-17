// src/app.module.ts
import { Module } from '@nestjs/common';
import { ContactController } from './contact/contact.controller';
import { EmailService } from './email/email.service';

@Module({
  imports: [],
  controllers: [ContactController],
  providers: [EmailService],
})
export class AppModule {}
