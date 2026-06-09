import { html } from "hono/html";
import type { FC, PropsWithChildren, ReactNode } from "hono/jsx";

type LayoutProps = PropsWithChildren<{
  title: string;
}>;

export const Layout: FC<LayoutProps> = ({ title, children }) => {
  return html` <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
      </head>
      <body
        class="bg-slate-900 text-slate-100 font-sans antialiased min-h-screen flex flex-col justify-center items-center p-6"
      >
        ${children}
      </body>
    </html>`;
};
