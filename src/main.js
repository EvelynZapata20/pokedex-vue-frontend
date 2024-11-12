import "./assets/css/app.css"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./routes/pokeneaRoutes"

const app = createApp(App)

app.use(router)

app.mount("#app")
