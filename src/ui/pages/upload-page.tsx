import { Layout } from "./layout";

export const UploadPage = () => {
  return (
    <Layout title="Clause-Lens | Scan Contracts for Red Flags">
      <main
        class={
          "max-w-md w-full bg-slate-800 border border-slate-700/50 rounded-2xl p-8 shadow-xl space-y-6"
        }
      >
        <div class={"text-center space-y-2"}>
          <h1
            class={
              "text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"
            }
          >
            Clause-Lens
          </h1>
          <p class={"text-sm text-slate-400"}>
            Upload your contract to detect hidden risks and legal red flags
            instantly.
          </p>
        </div>
        <form
          action={"/upload"}
          method="post"
          enctype="multipart/form-data"
          class={"space-y-4"}
        >
          <div
            class={
              "flex flex-col items-center justify-center border-2 border-dashed border-slate-600 hover:border-blue-500 rounded-xl p-6 transition-colors group cursor-pointer relative"
            }
          >
            <input
              type={"file"}
              name="contract"
              id="contract"
              accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              required
              class={
                "absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              }
            />
            <div class={"text-center space-y-2 z-0"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-10 h-10 mx-auto text-slate-400 group-hover:text-blue-400 transition-colors"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              <p class={"text-sm font-medium text-slate-300"}>
                Click to upload or drag and drop
              </p>
              <p class={"text-xs text-slate-500"}>PDF or DOCX only</p>
            </div>
          </div>

          <button
            type="submit"
            class={
              "w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 px-4 rounded-xl transition-colors shadow-lg shadow-blue-600/20 cursor-pointer"
            }
          >
            Analyze Contract
          </button>
        </form>
      </main>
    </Layout>
  );
};
