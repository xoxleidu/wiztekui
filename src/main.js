import Vue from "vue";
import App from "./App.vue";
import wiztekui from "../dist/wiztekui";
// import "../lib/scss/wiztekui.scss";
import "./style/style.scss";
// import "../lib/css/wiztekui.min.css";
Vue.use(wiztekui);
new Vue({
  el: "#app",
  render: h => h(App)
});
