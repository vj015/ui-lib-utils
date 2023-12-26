<template>
  <div class="QRGenerator">
    <div class="wrapper">
      <div class="header">
        <h1>Generate QR</h1>
      </div>
      <div class="form">
        <input type="text" v-model="textVal" placeholder="Enter text or url" />
        <button @click="generateQR()">{{ buttonLabel }}</button>
      </div>
      <div class="qr-code" v-if="this.srcVal != '' && this.textVal != ''">
        <img :src="this.srcVal" alt="qr-code" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QRGenerator",
  components: {},
  data() {
    return {
      textVal: "",
      srcVal: "",
      loading: false,
    };
  },
  computed: {
    buttonLabel() {
      return this.loading ? "Generating..." : "Generate QR";
    },
  },
  methods: {
    async generateQR() {
      this.loading = true;
      if (this.textVal === "") {
        this.srcVal = "";
        return;
      }
      // Assuming this.textVal contains the data for the QR code
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
        this.textVal
      )}`;

      // Fetch the image
      try {
        const response = await fetch(qrCodeUrl);

        // Check if the request was successful (status code 200)
        if (response.ok) {
          // Convert the response to a blob
          const blob = await response.blob();
          // Create a data URL for the blob
          const dataUrl = URL.createObjectURL(blob);
          // Set the src attribute of the image element
          this.srcVal = dataUrl;
        } else {
          console.error(
            "Failed to fetch QR code image:",
            response.status,
            response.statusText
          );
        }
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.error("Error fetching QR code image:", error.message);
      }
    },
  },
  watch: {
    textVal(newVal) {
      if (newVal === "") {
        this.srcVal = "";
      }
    },
  },
};
</script>

<style scoped>
/* Import Google Font - Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.wrapper {
  max-height: 500px;
  max-width: 410px;
  background: #fff;
  border-radius: 7px;
  padding: 20px 25px 0;
  transition: height 0.2s ease;
  border: 2px solid #c62f2ff5;
}
.header h1 {
  font-size: 21px;
  font-weight: 500;
  color: #c62f2ff5;
}
.wrapper .form {
  margin: 20px 0 25px;
}
.form :where(input, button) {
  width: 100%;
  height: 55px;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: 0.1s ease;
}
.form input {
  font-size: 18px;
  padding: 0 17px;
  border: 1px solid #c62f2ff5;
  color: #c62f2ff5;
}
.form input::placeholder {
  color: #c62f2ff5;
}
.form button {
  color: #fff;
  cursor: pointer;
  margin-top: 20px;
  font-size: 17px;
  background: #c62f2ff5;
}
.qr-code {
  display: flex;
  padding: 33px 0;
  margin-bottom: 20px;
  border-radius: 5px;
  align-items: center;
  pointer-events: none;
  justify-content: center;
  border: 1px solid #c62f2ff5;
}
.qr-code img {
  width: 170px;
}

@media (max-width: 430px) {
  .wrapper {
    height: 255px;
    padding: 16px 20px;
  }
  .form :where(input, button) {
    height: 52px;
  }
  .qr-code img {
    width: 160px;
  }
}
</style>
