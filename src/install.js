import MyButton from "../src/components/MyButton.vue";
import QRGenerator from "../src/components/QRGenerator.vue";

function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("my-button", MyButton);
  Vue.component("qr-generator", QRGenerator);
}

const plugin = {
  install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
  GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
  GlobalVue = global.vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

export { MyButton, QRGenerator, install };
