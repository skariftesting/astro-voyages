
import { createClient } from '@supabase/supabase-js';
import { Database } from './types';

// These values are already configured in netlify.toml and .github/workflows/ci.yml
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://hshpomayeppqlgsvozxl.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzaHBvbWF5ZXBwcWxnc3ZvenhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0NjQ2MjIsImV4cCI6MjA1ODA0MDYyMn0.1SIghcgd5A9DFvCgu0UWAUMUG3-HOOkxqW6VfgdcVhw';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Falling back to default values.');
}

export const supabase = createClient<Database>(
  supabaseUrl, 
  supabaseAnonKey,
  {
    auth: {
      storage: localStorage,
      persistSession: true,
      autoRefreshToken: true,
    }
  }
);
