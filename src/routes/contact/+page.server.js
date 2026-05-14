import { fail } from "@sveltejs/kit";
import { env } from '$env/dynamic/private'

function readField(formData, key) {
    return String(formData.get(key) ?? '').trim();
}

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const values = {
            company: readField(formData, 'company'),
            name: readField(formData, 'name'),
            email: readField(formData, 'email'),
            phone: readField(formData, 'phone'),
            message: readField(formData, 'message')
        };

        const errors = {};

        if (!values.company) errors.company = 'Company is required';
        if (!values.name) errors.name = 'Name is required';
        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
            errors.email = 'Enter a valid email address';
        }

        if (Object.keys(errors).length > 0) {
            return fail(400, { errors, values });
        }

        try {
            const mailOptions = {
                to: 'armit@chalmers.it',
                from: '"ArmIT Website Contact Form" armit@chalmers.it', // sender address
                subject: 'ArmIT Contact Form Proposal',
                body: "Company: " + values.company + "\n" +
                    "Name: " + values.name + "\n" +
                    "Email: " + values.email + "\n" +
                    "Phone: " + values.phone + "\n" +
                    "Message: " + values.message
            };

            const response = await fetch(env.GOTIFY_URL, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'pre-shared: ' + env.GOTIFY_TOKEN
                },
                body: JSON.stringify(mailOptions)
              });

            if (!response.ok) {
                throw new Error(`Gotify returned ${response.status}`);
            }
        } catch (error) {
            console.error('Error occurred while sending email:', error);
            return fail(500, {
                errors: { form: 'Failed to send message. Please email armit@chalmers.it directly.' },
                values
            });
        }

        return { success: true };
    }
  };
