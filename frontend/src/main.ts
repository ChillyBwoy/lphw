import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { ApiClient } from "./client";
import { apiClientInjectKey } from "./constants/injection";

const app = createApp(App);

app.use(router);
app.provide(
  apiClientInjectKey,
  new ApiClient({
    BASE: "http://localhost:8000",
  }),
);

app.mount("#app");
