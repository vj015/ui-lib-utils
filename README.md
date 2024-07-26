# vue-plugins-poc
![Plugin](https://github.com/user-attachments/assets/84d46f85-cba0-488c-a571-a3ce0ced9280)

### Fabricating a new component, “MyQR Generator“ for exporting as a plugin:
> Please refer to this code repository for referring to the component which we created to export as a plugin Component to Export. So here, we have developed a Vue component which is going to be published in library.
 
### Entry Point using Install Method:
> We need to create an entry point for our package. This entry point will be the first file which gets executed when someone installs the library. This entry file should contain an install method, which basically registers all the components we are using in our application.
> 
```
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
```

### Configure package.json file to build as a plugin: 
> We need to create a command which can make a build of the package. This command is as follows-
```
vue-cli-service build --target lib --name myLib [entry]
```

### Publishing the library to npm:
```
npm login
npm run build-library
npm publish --access public
```

> After publishing, the package would look like this on npm.js as NPM Package
<img width="960" alt="Unknown1" src="https://github.com/user-attachments/assets/d492083b-a42d-4e7f-97e7-7bdb10f53e62">

### Consuming this package :
> We tried to install this package in other project as above given steps and tried to consume the component. Imported Css files externally for styling: import "ui-lib-utils/dist/ui-lib-utils.css";

## Project setup

```
npm install --save ui-lib-utils
```

or

```
yarn add ui-lib-utils
```

## Basic Usage

```
<template>
  <MyButton
    background="#fff"
    color="#000"
    text="Hello World"
  /
  <QRGenerator />
</template>
<script>
import { QRGenerator, MyButton } from "ui-lib-utils";

export default {
  components:{
    QRGenerator,
    MyButton
  }
}
</script>
```
<img width="960" alt="Unknown3" src="https://github.com/user-attachments/assets/361b37b8-60a4-416b-afb7-2283f9879c95">

### Useful Links:

- Live Link of this app consuming plugin: [QR-Generator](https://qr-generator-library-component.netlify.app/)
- Original Repo on which Component was build: [Vue Plugin Repo](https://github.com/vj015/ui-lib-utils/)
- Repo consuming this plugin: [Consuming App](https://github.com/vj015/submit-customer-data/blob/main/src/App.vue)
- Vue Plugins documentation: [Vue Plugins](https://vuejs.org/guide/reusability/plugins)
- Vue and Web Components documentation: [Vue WC](https://vuejs.org/guide/extras/web-components)

