# Netlify Deployment Configuration

## Overview
This document outlines the configuration for deploying the Astro Voyages application to Netlify while maintaining the existing Supabase credentials.

## Existing Supabase Credentials
The application is configured to use the following Supabase credentials, which should be preserved during deployment:

```
VITE_SUPABASE_URL=https://hshpomayeppqlgsvozxl.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzaHBvbWF5ZXBwcWxnc3ZvenhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NjQ2MjIsImV4cCI6MjA1ODA0MDYyMn0.1SIghcgd5A9DFvCgu0UWAUMUG3-HOOkxqW6VfgdcVhw
```

## Deployment Configuration

### Netlify Configuration
The `netlify.toml` file has been updated to include the Supabase credentials in the build environment:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  # Use existing Supabase credentials
  VITE_SUPABASE_URL = "https://hshpomayeppqlgsvozxl.supabase.co"
  VITE_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzaHBvbWF5ZXBwcWxnc3ZvenhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NjQ2MjIsImV4cCI6MjA1ODA0MDYyMn0.1SIghcgd5A9DFvCgu0UWAUMUG3-HOOkxqW6VfgdcVhw"
```

### Content Security Policy
The Content Security Policy in the `netlify.toml` file already includes the Supabase URL:

```toml
Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; connect-src 'self' https://hshpomayeppqlgsvozxl.supabase.co;"
```

## Deployment Steps

1. **Connect to Netlify**
   - Sign in to your Netlify account
   - Click "Add new site" > "Import an existing project"
   - Connect to your GitHub repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - The environment variables are already configured in the `netlify.toml` file

3. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy your site using the existing Supabase credentials

## Important Notes

- Do not change the Supabase credentials in any configuration files
- The GitHub workflow in `.github/workflows/ci.yml` is configured to use the Supabase credentials from GitHub secrets during CI/CD
- For local development, the credentials are stored in the `.env` file

## Troubleshooting

If you encounter any issues with Supabase connectivity after deployment:

1. Verify that the environment variables are correctly set in the Netlify dashboard
2. Check the Netlify deployment logs for any build errors
3. Ensure the Content Security Policy in `netlify.toml` includes the Supabase URL
4. Confirm that the Supabase project is active and the credentials are valid