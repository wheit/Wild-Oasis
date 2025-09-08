import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ukniledzwbdvrsbqtzog.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrbmlsZWR6d2JkdnJzYnF0em9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxMjI4MTMsImV4cCI6MjA3MjY5ODgxM30.8Iep3u0_cwnnJYmSBnOCfU9IT-jpGRVrP9uwHzZiexQ";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
