import { fail } from "@sveltejs/kit"
import { z } from "zod"
import { superValidate } from "sveltekit-superforms/server"

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
        console.log(form.data.company)
        console.log(form.data.name)
        console.log(form.data.email)
        console.log(form.data.phone)
        console.log(form.data.message)
        
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