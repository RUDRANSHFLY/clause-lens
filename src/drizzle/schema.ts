import { json, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const contracts = pgTable("contract", {
  id: uuid("id").primaryKey().defaultRandom(),
  fileName: text("file_name").notNull(),
  storagePath: text("storage_path").notNull(),
  metaData: json("meta_data"),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow(),
});
