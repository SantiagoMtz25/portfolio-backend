// src/email/email.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

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
    let nameCap = name.charAt(0).toUpperCase() + name.slice(1);
    let motiveCap = motive.charAt(0).toUpperCase() + motive.slice(1);
    let messageCap = message.charAt(0).toUpperCase() + message.slice(1);
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${nameCap}`,
      text: `Motive: ${motive}\n\nEmail: ${motiveCap}\n\nMessage: ${messageCap}`,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}
