import * as nodemailer from 'nodemailer';

export async function sendResetPasswordEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    // Configure your email service provider (e.g., Gmail, SendGrid, etc.)
    service: 'gmail',
    auth: {
      user: 'fifamatesaiub@gmail.com',
      pass: 'room@mates23%AIUB',
    },
  });

  const mailOptions = {
    from: 'fifamatesaiub@gmail.com',
    to: email,
    subject: 'Reset Password',
    text: `To reset your password, please click the following link: http://yourapp.com/reset-password?token=${token}`,
  };

  await transporter.sendMail(mailOptions);
}