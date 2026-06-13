import { Hono } from "hono";
import { UploadPage } from "./ui/pages";
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());

app.get("/", (c) => {
  return c.html(<UploadPage />);
});

export default app;
