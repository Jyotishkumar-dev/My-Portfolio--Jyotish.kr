import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Retrieve credentials from Vite env or user localStorage configuration
const getStoredCredentials = () => {
  const envUrl = import.meta.env.VITE_SUPABASE_URL || '';
  const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

  if (typeof window !== 'undefined') {
    const localUrl = localStorage.getItem('supabase_project_url');
    const localKey = localStorage.getItem('supabase_anon_key');
    if (localUrl && localKey) {
      return { url: localUrl, key: localKey, isCustom: true };
    }
  }

  return { url: envUrl, key: envKey, isCustom: false };
};

let clientInstance: SupabaseClient | null = null;

export const getSupabaseClient = (): SupabaseClient | null => {
  const { url, key } = getStoredCredentials();
  if (!url || !key) {
    return null;
  }
  try {
    if (!clientInstance) {
      clientInstance = createClient(url, key);
    }
    return clientInstance;
  } catch (err) {
    console.error('Failed to initialize Supabase client:', err);
    return null;
  }
};

export const setCustomSupabaseCredentials = (url: string, key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('supabase_project_url', url.trim());
    localStorage.setItem('supabase_anon_key', key.trim());
    clientInstance = createClient(url.trim(), key.trim());
  }
};

export const clearCustomSupabaseCredentials = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('supabase_project_url');
    localStorage.removeItem('supabase_anon_key');
    clientInstance = null;
  }
};

export const getSupabaseConfigStatus = () => {
  const { url, key, isCustom } = getStoredCredentials();
  return {
    isConfigured: Boolean(url && key),
    url: url ? `${url.substring(0, 18)}...` : '',
    isCustom,
  };
};

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  company?: string;
  role?: string;
  message: string;
  created_at?: string;
}

export const submitContactMessage = async (
  data: Omit<ContactMessage, 'id' | 'created_at'>
): Promise<{ success: boolean; isStoredLocally: boolean; message: string }> => {
  const supabase = getSupabaseClient();

  if (supabase) {
    try {
      const { error } = await supabase
        .from('portfolio_messages')
        .insert([
          {
            name: data.name,
            email: data.email,
            company: data.company || 'Not Specified',
            role: data.role || 'General Inquiry',
            message: data.message,
            created_at: new Date().toISOString(),
          },
        ]);

      if (!error) {
        return {
          success: true,
          isStoredLocally: false,
          message: 'Your message has been securely submitted to Supabase database!',
        };
      } else {
        console.warn('Supabase insert notice (falling back to local):', error.message);
      }
    } catch (err) {
      console.warn('Supabase network error, fallback to local store:', err);
    }
  }

  // Graceful fallback to client storage so inquiries are NEVER lost
  const localList: ContactMessage[] = JSON.parse(
    localStorage.getItem('portfolio_local_messages') || '[]'
  );
  localList.unshift({
    ...data,
    id: `local-${Date.now()}`,
    created_at: new Date().toISOString(),
  });
  localStorage.setItem('portfolio_local_messages', JSON.stringify(localList));

  return {
    success: true,
    isStoredLocally: true,
    message:
      'Message saved successfully! (Stored in local buffer. Connect Supabase credentials to sync directly with your live cloud DB).',
  };
};

export const getStoredMessages = async (): Promise<ContactMessage[]> => {
  const supabase = getSupabaseClient();
  if (supabase) {
    try {
      const { data, error } = await supabase
        .from('portfolio_messages')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data) {
        return data;
      }
    } catch {
      // Fall through to local
    }
  }

  return JSON.parse(localStorage.getItem('portfolio_local_messages') || '[]');
};

export const SUPABASE_SQL_SCHEMA = `-- Run this in your Supabase SQL Editor:
create table if not exists public.portfolio_messages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text not null,
  email text not null,
  company text default 'Not Specified',
  role text default 'General Inquiry',
  message text not null
);

-- Enable Row Level Security (RLS)
alter table public.portfolio_messages enable row level security;

-- Allow public anonymous insert for portfolio visitors
create policy "Allow anonymous message submissions"
  on public.portfolio_messages
  for insert
  to anon
  with check (true);

-- Allow authenticated reads (or read with service role)
create policy "Allow read for service role and auth users"
  on public.portfolio_messages
  for select
  to authenticated
  using (true);
`;
