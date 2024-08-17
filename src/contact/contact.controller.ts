// src/contact/contact.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { EmailService } from '../email/email.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async sendContactForm(@Body() createContactDto: CreateContactDto) {
    const { name, email, motive, message } = createContactDto;
    await this.emailService.sendContactMail(name, email, motive, message);
    return { message: 'Contact form sent successfully' };
  }
}
