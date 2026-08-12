/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PERSONAL_EMAIL?: string;
  readonly VITE_PERSONAL_PHONE?: string;
  readonly GEMINI_API_KEY?: string;
  readonly APP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
