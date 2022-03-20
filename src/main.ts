import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInfo,
  faInfoCircle,
  faHome,
  faBlog,
  faPaste,
  faCheckDouble,
  faAngry,
  faCheck,
  faTerminal,
  faBars,
  faCloudMeatball,
  faLocationArrow,
  faExchangeAlt,
  faExclamationTriangle,
  faArrowRight,
  faLaptopCode,
  faKeyboard,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faTelegram,
  faTelegramPlane,
  faAngellist,
  faGithubAlt,
  faGithubSquare,
  faBloggerB,
  faAndroid,
  faLinux,
  faBluetooth,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

library.add(
  faInfo,
  faHome,
  faGithub,
  faBlog,
  faPaste,
  faCheckDouble,
  faTwitter,
  faTelegram,
  faTelegramPlane,
  faAngry,
  faAngellist,
  faCheck,
  faGithubAlt,
  faGithubSquare,
  faBloggerB,
  faTerminal,
  faInfoCircle,
  faBars,
  faCloudMeatball,
  faAndroid,
  faLinux,
  faLocationArrow,
  faBluetooth,
  faExclamationTriangle,
  faGitAlt,
  faArrowRight,
  faLaptopCode,
  faKeyboard,
  faArrowLeft
);

AOS.init({ delay: 100, duration: 600, easing: "ease-out-cubic" });

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
