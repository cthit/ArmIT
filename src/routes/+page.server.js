// src/routes/contact/+page.server.js
import { env } from '$env/dynamic/private'

export const actions = {
    default: async ({ request }) => {
        const form = await request.formData();
        const email = form.get('e-mail');

        // Can change this in the future if u want:
        let mailOptions = {
            from: '"Armit (Contact ME)" <motin@chalmers.it>',
            to: 'armit@chalmers.it, motin@chalmers.it',
            subject: '💃💃Contact ME Form',
            text: "Please reach out to me at: " + email
        };

        try {
            const info = await fetch(env.GOTIFY_URL, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'pre-shared: ' + env.GOTIFY_TOKEN
                },
                body: JSON.stringify(mailOptions)
              });

            console.log('Message sent: %s', info.messageId);

        } catch (error) {
            console.error('Error occurred while sending email:', error);
            return {
                status: 500,
                errors: { message: 'Failed to send email' }
            };
        }
        return {
            status: 200
        };

    }
};