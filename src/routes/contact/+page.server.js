import { fail } from "@sveltejs/kit";
import { z } from "zod";
import { superValidate, message } from "sveltekit-superforms/server";
import { env } from '$env/dynamic/private'

const newContactSchema = z.object({
    company: z.string().min(1),
    name: z.string().min(1),
    email: z.string().min(1),
    phone: z.string().min(0),
    message: z.string().min(0)
});

export const actions = {
    sendEmail: async ({ request }) => {
        const form = await superValidate(request, newContactSchema);
        console.log(form)
        if (!form.valid) {
        
        return fail(400, { form });
        }

        // - send email:
        try {
            // Define the email message
            let mailOptions = {
                to: 'armit@chalmers.it, motin@chalmers.it', // list of receivers
                from: '"Armit Website Contact Form" motin@chalmers.it', // sender address
                subject: '$CASH SEASON! 💵🤑ArmIT Contact Form Proposal', // Subject line
                body: "Company: " + form.data.company + "\n" +
                    "Name: " + form.data.name + "\n" +
                    "Email: " + form.data.email + "\n" +
                    "Phone: " + form.data.phone + "\n" +
                    "Message: " + form.data.message // plain text body
            };

            // Send mail with defined transport object
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
        }

        return message(form, "Thanks for reaching out!" );
    }
  };
