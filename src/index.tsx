import { Hono } from "hono";
import { UploadPage } from "./ui/pages";

const app = new Hono();

app.get("/", (c) => {
  return c.html(<UploadPage />);
});

export default app;
