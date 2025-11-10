# Deployment Notes for Vercel

## Environment Variables

Make sure all these environment variables are set in your Vercel project settings:

### SMTP Settings (Required)
```
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=contact@oceanedgemedia.co
SMTP_PASSWORD=Ocean@2025NS
SMTP_FROM=contact@oceanedgemedia.co
```

### Google reCAPTCHA v3 (Required)
```
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LcuMAgsAAAAAGn7HGDoZkdNl_0LRJAflBtXVRQk
RECAPTCHA_SECRET_KEY=6LcuMAgsAAAAANzOg0c9h1SlZenO7bmu_OTXTaUh
```

## How to Add Environment Variables in Vercel

1. Go to your project on Vercel Dashboard
2. Click on **Settings**
3. Click on **Environment Variables**
4. Add each variable with:
   - **Name**: Variable name (e.g., `SMTP_HOST`)
   - **Value**: Variable value (e.g., `smtp.hostinger.com`)
   - **Environment**: Select all (Production, Preview, Development)
5. Click **Save**

## Important Notes

- After adding environment variables, you need to **redeploy** your application
- Variables starting with `NEXT_PUBLIC_` are exposed to the browser
- Other variables are only available in API routes and server-side code
- Make sure SMTP credentials are correct for production

## Testing

After deployment:
1. Test the contact form on your production URL
2. Check Vercel Function Logs if there are errors
3. Verify emails are being sent successfully

## Troubleshooting

If you get a 500 error:
1. Check Vercel Function Logs (Dashboard → Deployments → Click deployment → Functions tab)
2. Verify all environment variables are set correctly
3. Ensure SMTP credentials work (test with a mail client)
4. Check that the reCAPTCHA keys are valid
