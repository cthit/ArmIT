
import nodemailer from 'nodemailer';

export async function post(request) {
  const { email } = request.body; // Assuming the email address is passed in the request body
  
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
    from: '"Armit (Contact ME)" motin@chalmers.it', // sender address
                to: 'armit@chalmers.it, motin@chalmers.it', // list of receivers
                subject: '💃💃Contact ME Form', // Subject line
                text: "Please reach out to me at: " + email.toString()
            };

  try {
    // Send mail with defined transport object
    let info = await transporter.sendMail(mailOptions);
    console.log('Message sent: %s', info.messageId);
    return {
      status: 200,
      body: { message: 'Email sent successfully' }
    };
  } catch (error) {
    console.error('Error occurred while sending email:', error);
    return {
      status: 500,
      body: { error: 'Failed to send email' }
    };
  }
}