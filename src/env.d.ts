/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GITHUB_OWNER?: string;
  readonly PUBLIC_GITHUB_REPO?: string;
  readonly PUBLIC_WINGET_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
