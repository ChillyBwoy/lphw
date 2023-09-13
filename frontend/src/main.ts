import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { ApiClient } from "./client";
import { apiClientInjectKey } from "./constants/injection";

const app = createApp(App);

app.use(router);

const host = import.meta.env.VITE_API_HOST;
const port = import.meta.env.VITE_API_PORT;
const apiUrl = `${host}:${port}`;

console.log(`Api host: "${apiUrl}"`);

// Inject the API client into the app so that it can be used in components
app.provide(
  apiClientInjectKey,
  new ApiClient({
    BASE: apiUrl,
  }),
);

app.mount("#app");
