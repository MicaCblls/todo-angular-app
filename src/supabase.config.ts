import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { commonEnv } from './environments/environment.common';

let SUPABASE_URL: string = '';
let SUPABASE_KEY: string = '';
let supabase: SupabaseClient;
let { apiKey, apiUrl } = commonEnv;

if (apiKey && apiUrl) {
  SUPABASE_URL = apiUrl;
  SUPABASE_KEY = apiKey;
}
supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
export default supabase;
