import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/main.css';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import en from "@/locales/en.json"
import it from "@/locales/it.json"
import { createI18n } from 'vue-i18n'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronRight,
  faTable,
  faCode,
  faPenNib,
  faGear,
  faUserTie,
  faLayerGroup,
  faTrophy

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faChevronRight,
  faTable,
  faCode,
  faPenNib,
  faGear, 
  faUserTie,
  faLayerGroup, 
  faTrophy
);


const i18n = createI18n({
  messages: {
    en: en,
    it:it
  },
  fallbackLocale:'en'
}
)

createApp(App).use(store).use(router).use(i18n)
.component("font-awesome-icon", FontAwesomeIcon)
.mount("#app");

import 'bootstrap/dist/js/bootstrap.js'