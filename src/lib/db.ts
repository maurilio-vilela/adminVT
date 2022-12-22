import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  'https://dzthrfklifibqdtnawov.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6dGhyZmtsaWZpYnFkdG5hd292Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4MDM3OTYsImV4cCI6MTk4NjM3OTc5Nn0.Fr5gJU2Wz8szndrWtjHGD3bTl27XmUyPi4NbR1exxWQ'
);

export default supabase;