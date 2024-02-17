import { fail } from "@sveltejs/kit";
import { z } from "zod";
import { superValidate, message } from "sveltekit-superforms/server";
import nodemailer from 'nodemailer';



const newContactSchema = z.object({
    company: z.string().min(1),
    name: z.string().min(1),
    email: z.string().min(1),
    phone: z.string().min(0),
    message: z.string().min(0)
});

export const actions = {
    // default: async ({ request }) => {
    //   const form = await superValidate(request, newContactSchema);
    //   console.log('POST', form);
  
    //   // Convenient validation check:
    //   if (!form.valid) {
    //     // Again, return { form } and things will just work.
    //     return fail(400, { form });
    //   }
  
    //   // TODO: Do something with the validated form.data
  
    //   // Yep, return { form } here too
    //   return { form };
    // },
    sendEmail: async ({ request }) => {
        const form = await superValidate(request, newContactSchema);
        console.log(form)
        
        
        if (!form.valid) {
        // Again, return { form } and things will just work.
        return fail(400, { form });
        }

        // TODO - send email:
        try {
            // Create a Nodemailer transporter using SMTP
            let transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: 'motin@chalmers.it', 
                    pass: 'bcsvlrwvobdfacwg' 
                }
            });
    
            // Define the email message
            let mailOptions = {
                from: '"Armit Website Contact Form" motin@chalmers.it', // sender address
                to: 'armit@chalmers.it, motin@chalmers.it', // list of receivers
                subject: '$CASH SEASON! 💵🤑ArmIT Contact Form Proposal', // Subject line
                text: "Company: " + form.data.company + "\n" +
                    "Name: " + form.data.name + "\n" +
                    "Email: " + form.data.email + "\n" +
                    "Phone: " + form.data.phone + "\n" +
                    "Message: " + form.data.message // plain text body
            };
    
            // Send mail with defined transport object
            let info = await transporter.sendMail(mailOptions);
    
            console.log('Message sent: %s', info.messageId);
        } catch (error) {
            console.error('Error occurred while sending email:', error);
        }
        
        return message(form, "Thanks for reaching out!" );
    }
  };






// /** @type {import('./$types').Actions} */
// export const actions = {
// 	sendEmail: async ({ request }) => {
//         const data = await request.formData();
//         const email = data.get('email');

// 		console.log("Email is being delivered" + email)
// 	}
// };