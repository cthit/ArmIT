// src/routes/contact/+page.server.js
import nodemailer from 'nodemailer';

export const actions = {
    default: async ({ request }) => {
        const form = await request.formData();
        const email = form.get('e-mail');

        let transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'motin@chalmers.it',
                pass: 'bcsvlrwvobdfacwg'
            }
        });

        let mailOptions = {
            from: '"Armit (Contact ME)" <motin@chalmers.it>',
            to: 'armit@chalmers.it, motin@chalmers.it',
            subject: '💃💃Contact ME Form',
            text: "Please reach out to me at: " + email
        };

        try {
            await transporter.sendMail(mailOptions);

            return {
                status: 200 
            };
        } catch (error) {
            console.error('Failed to send email:', error);

            return {
                status: 500,
                errors: { message: 'Failed to send email' }
            };
        }
    }
};
