import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const connectionString: string = process.env.DATABASE_URL!;

/**
 * Checks whether a database connection string exists
 * @returns {boolean} `true` if the connection string exits, otherwise `false`.
 */
export const checkConnectionStringExists = (): boolean => {
  if (!connectionString) {
    console.error(
      "🔴 \x1b[31m[ERROR]\x1b[0m DATABASE_URL is missing! Check your .env file.",
    );
    process.exit(1);
  } else {
    console.log("🟢 \x1b[32m[SUCCESS]\x1b[0m DATABASE_URL is set and ready.");
    return true;
  }
};

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(connectionString, {
  prepare: true,
});

const db = drizzle(client);

export const checkDataBaseConnection = async () => {
  // start a timer to see how fast the connection is
  const startTime = performance.now();
  try {
    await client`SELECT 1`;
    const duration = ((performance.now() - startTime) / 1000).toFixed(1);
    console.log(
      `🟢 \x1b[32m[DB CONNECTED]\x1b[0m Successfully pinged database in ${duration}s.`,
    );
    return true;
  } catch (err) {
    console.error(
      "🔴 \x1b[31m[DB ERROR]\x1b[0m Failed to connect to the database!",
    );

    // Log the actual error
    if (err instanceof Error) {
      console.error(`👉 \x1b[33m[Details]\x1b[0m ${err.message}`);
    } else {
      console.error("👉 \x1b[33m[Details]\x1b[0m Unknown error occurred.", err);
    }

    return false;
  }
};
