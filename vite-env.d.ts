// Fixed: Removed the reference to vite/client to resolve the "Cannot find type definition file" error.
declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
  }
}