import * as nodemailer from 'nodemailer';
import { randomBytes } from 'crypto';
export function generateResetToken(): string {
  return randomBytes(16).toString('hex');
}

export async function sendResetPasswordEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aiubsemester1@gmail.com',
      pass: 'zpip miax heks pdnk',
    },
  });

  const mailOptions = {
    from: 'aiubsemester1@gmail.com',
    to: email,
    subject: 'Reset Password',
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset</title>
    </head>
    <body>
        <h1>Password Reset</h1>
        <p>To reset your password, please use the following token:</p>
        <textarea id="tokenField" rows="4" cols="50" readonly>${token}</textarea>
    
        <script>
            // No copy button, simply displaying the token in a textarea
        </script>
    </body>
    </html>`,
  };

  await transporter.sendMail(mailOptions);
}
