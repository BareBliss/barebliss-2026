import { StackServerApp } from "@stack-auth/nextjs";

export const stackServerApp = new StackServerApp({
  tokenStore: "nextjs-cookie",
});
