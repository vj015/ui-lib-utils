<template>
  <div>
    <h1>{{ "App" }}</h1>
    <QRGenerator />
    <MyButton />
  </div>
</template>

<script>
import QRGenerator from "./components/QRGenerator.vue";
import MyButton from "./components/MyButton.vue";
export default {
  name: "App",
  components: {
    QRGenerator,
    MyButton,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
