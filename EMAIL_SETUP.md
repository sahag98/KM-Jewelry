# Email Setup Guide

This project uses Resend to send emails for the estimate request form. Follow these steps to set up email functionality:

## 1. Get a Resend API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to your dashboard and create an API key
3. Copy the API key (starts with `re_`)

## 2. Set Up Environment Variables

Create a `.env.local` file in your project root with the following:

```env
RESEND_API_KEY=re_your_api_key_here
```

## 3. Verify Your Domain

1. In your Resend dashboard, go to "Domains"
2. Add and verify your domain (e.g., `yourdomain.com`)
3. This is required for the "from" email address

## 4. Update Email Configuration

In `app/api/send-email/route.ts`, update these values:

- `from: 'KM Jewelry <noreply@yourdomain.com>'` - Replace with your verified domain
- `to: ['info@kmjewelry.com']` - Replace with your business email address

## 5. Test the Email Functionality

1. Start your development server: `npm run dev`
2. Open the estimate modal and submit a test request
3. Check that emails are sent to both your business email and the customer

## Email Templates

The system sends two emails:

1. **Business Notification**: Sent to your business email with customer details and project information
2. **Customer Confirmation**: Sent to the customer thanking them for their request

Both emails use HTML templates with professional styling.

## Troubleshooting

- Make sure your domain is verified in Resend
- Check that your API key is correct
- Verify the "to" email address is valid
- Check the browser console and server logs for any errors
