// src/email/email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail', // Or any other email service you prefer
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASSWORD, 
      },
    });
  }

  async sendContactMail(name: string, email: string, motive: string, message: string) {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${name}`,
      text: `Motive: ${motive}\n\nEmail: ${email}\n\nMessage: ${message}`,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}
