# shareable-components-poc

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