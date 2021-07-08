export interface Browser {
  [key: string]: any;
}
declare global {
  interface Window {
    browser: Browser;
  }
}
