import "dotenv/config";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_PUBLISHABLE_KEY = process.env.SUPABASE_PUBLISHABLE_KEY!;

export const verifySupabaseCredentials = () => {
  if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    console.error(
      "🔴 \x1b[31m[CONFIG ERROR]\x1b[0m Missing required Supabase environment variables!",
    );

    if (!SUPABASE_URL) {
      console.error(
        "👉 \x1b[33m[Missing]\x1b[0m SUPABASE_URL is not defined in your .env file.",
      );
    }
    if (!SUPABASE_PUBLISHABLE_KEY) {
      console.error(
        "👉 \x1b[33m[Missing]\x1b[0m SUPABASE_PUBLISHABLE_KEY is not defined in your .env file.",
      );
    }

    // stop execution
    process.exit(1);
  }
  console.log(
    "⚡ \x1b[36m[SUPABASE]\x1b[0m Credentials verified. Client is okay! ✅",
  );
};

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
