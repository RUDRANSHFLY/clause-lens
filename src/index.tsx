import "dotenv/config";
import { Hono } from "hono";
import { UploadPage } from "./ui/pages";
import { logger } from "hono/logger";
import {
  checkConnectionStringExists,
  checkDataBaseConnection,
} from "./drizzle";
import { uploadToSupabaseStorage, verifySupabaseCredentials } from "./supabase";
import { ContentfulStatusCode } from "hono/utils/http-status";

const app = new Hono();

app.use(logger());

checkConnectionStringExists();
verifySupabaseCredentials();

app.get("/", (c) => {
  return c.html(<UploadPage />);
});

app.get("/health", async (c) => {
  const dbConnect = await checkDataBaseConnection();
  if (dbConnect) {
    return c.json({
      status: "ok",
      database: "connected",
    });
  } else {
    return c.json({
      status: "error",
      database: "disconnected",
    });
  }
});

app.post("/upload", async (c) => {
  const body = await c.req.parseBody();

  const file = body["contract"];

  if (!(file instanceof File)) {
    return c.json(
      {
        error: "No file provided",
      },
      400,
    );
  }

  const result = await uploadToSupabaseStorage(file);

  const { success } = result;

  if (success) {
    const { message, id, path } = result;
    return c.json({ message, id, path }, 201);
  } else {
    const { message, status, name } = result;
    const statusCode: ContentfulStatusCode =
      (status as ContentfulStatusCode) || 500;
    return c.json({ message, name }, statusCode);
  }
});

export default app;
