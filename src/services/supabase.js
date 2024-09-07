
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://aquclkmlhnlivraoqwsf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxdWNsa21saG5saXZyYW9xd3NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQzMTE1NjUsImV4cCI6MjAzOTg4NzU2NX0.OkPu3LJhRW__IbEHYGXE8TvZajcaVV0TYSE42tEGG4Q';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;