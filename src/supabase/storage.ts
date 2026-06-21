import { supabase } from "./supabase";

export const uploadToSupabaseStorage = async (file: File) => {
  const fileName = `${Date.now()}-${file.name}`;
  const fileType = file.type;
  try {
    const { data, error } = await supabase.storage
      .from("contracts")
      .upload(fileName, file, {
        contentType: fileType,
        upsert: false,
      });

    if (error) {
      const { message, name, status } = error;

      console.error(
        `❌ \x1b[31m[UPLOAD FAILED]\x1b[0m ${error.message} (Status: ${status})`,
      );
      return {
        success: false,
        name,
        message,
        status,
      };
    } else {
      console.log(
        `🟢 \x1b[32m[STORAGE SUCCESS]\x1b[0m File uploaded! Path: ${data.path}`,
      );
      const { id, path } = data;
      return {
        success: true,
        id,
        path,
        message: "File uploaded successfully to Supabase storage.",
      };
    }
  } catch (err) {
    console.error(
      "🔴 \x1b[31m[SUPABASE ERROR]\x1b[0m Failed to upload to the supabase storage!",
    );

    // Log the actual error
    if (err instanceof Error) {
      console.error(`👉 \x1b[33m[Details]\x1b[0m ${err.message}`);
    } else {
      console.error("👉 \x1b[33m[Details]\x1b[0m Unknown error occurred.", err);
    }

    throw err;
  }
};
