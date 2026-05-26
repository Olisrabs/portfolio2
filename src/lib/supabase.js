import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wdrsfjgtakhseiahcfen.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndkcnNmamd0YWtoc2VpYWhjZmVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkzNTAwMjgsImV4cCI6MjA5NDkyNjAyOH0.2b007OWZAK4PynwE5V_tv_UUbnygWb4GftAVGsMLaVg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
