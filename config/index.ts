// App-wide configuration.
// NEXT_PUBLIC_API_URL is the base URL of the backend API (set it in .env.local).
// It is empty until the backend exists, so requests made through useClient()
// resolve against the current origin.
const config = {
  API_URL: process.env.NEXT_PUBLIC_API_URL ?? "",
};

export default config;
