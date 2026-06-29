const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async options => {
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: options.email,
    subject: options.subject,
    text: options.message,
  });
};

exports.sendPasswordResetEmail = async (email, resetUrl) => {
  await sendEmail({
    email,
    subject: 'Click the link blow to reset your passoword',
    message: `You requested a password reset.

Please use the link below to reset your password:

${resetUrl}

This link will expire in: 10 minutes.

If you did not request a password reset, please ignore this email.

RenderCube Team`,
  });
};
