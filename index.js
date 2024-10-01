

// index.js
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getCities() {
  try {
    const { data, error } = await supabase
      .from('pais')
      .select('*');
    
    if (error) throw error;
    
    console.log('Cities:', data);
  } catch (error) {
    console.error('Error fetching cities:', error.message);
  }
}

getCities();
