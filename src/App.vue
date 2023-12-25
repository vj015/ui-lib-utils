<template>
  <div>
    <h1>{{ "App" }}</h1>
    <QRGenerator />
  </div>
</template>

<script>
import QRGenerator from "./components/QRGenerator.vue";
export default {
  name: "App",
  components: {
    QRGenerator,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
