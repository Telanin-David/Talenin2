import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import SibApiV3Sdk from '@sendinblue/client';

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Initialize Sendinblue API client
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, process.env.SENDINBLUE_API_KEY);

// Email Sending Endpoint
app.post('/send-email', async (req, res) => {
  const { firstName, lastName, email, phone, service, message } = req.body;

  // Validate request body
  if (!firstName || !lastName || !email || !phone || !service || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const emailOptions = {
    sender: { email: 'godsfavour028@gmail.com', name: 'Your Name' }, // Replace with your sender email and name
    to: [{ email: process.env.RECIPIENT_EMAIL }], // Recipient email from environment
    subject: 'New Contact Form Submission',
    htmlContent: `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    replyTo: { email }, // User's email address for reply-to
  };

  try {
    // Send email using the Sendinblue API
    const response = await apiInstance.sendTransacEmail(emailOptions);
    console.log('Email sent:', response);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Error sending email.' });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
