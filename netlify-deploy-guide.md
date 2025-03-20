# Netlify Deployment Guide for Astro Voyages

## Overview
This guide explains how to deploy the Astro Voyages application to Netlify while maintaining the existing Supabase credentials.

## Deployment Steps

1. **Connect to Netlify**
   - Sign in to your Netlify account
   - Click "Add new site" > "Import an existing project"
   - Connect to your GitHub repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Environment Variables**
   - The Supabase credentials are already configured in the `netlify.toml` file:
     ```
     [build.environment]
     VITE_SUPABASE_URL = "https://hshpomayeppqlgsvozxl.supabase.co"
     VITE_SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzaHBvbWF5ZXBwcWxnc3ZvenhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NjQ2MjIsImV4cCI6MjA1ODA0MDYyMn0.1SIghcgd5A9DFvCgu0UWAUMUG3-HOOkxqW6VfgdcVhw"
     ```
   - These are the existing credentials and should not be changed

4. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy your site using the existing Supabase credentials

## Important Notes

- The Content Security Policy in `netlify.toml` already includes the Supabase URL: `https://hshpomayeppqlgsvozxl.supabase.co`
- The GitHub workflow in `.github/workflows/ci.yml` is configured to use the Supabase credentials from GitHub secrets during CI/CD
- For local development, the credentials are stored in the `.env` file

## Troubleshooting

If you encounter any issues with Supabase connectivity after deployment:

1. Verify that the environment variables are correctly set in the Netlify dashboard
2. Check the Netlify deployment logs for any build errors
3. Ensure the Content Security Policy in `netlify.toml` includes the Supabase URL
4. Confirm that the Supabase project is active and the credentials are valid