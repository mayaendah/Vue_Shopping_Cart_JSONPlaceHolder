<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Kosmetik</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/product" class="nav-link">Products</router-link>
            </li>
          </ul>

          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <div class="boks">
                <router-link to="/keranjang" class="nav-link"
                  >Keranjang
                  <i class="bi bi-cart3"></i>
                  <span class="decText">{{
                    updateItemKeranjang
                      ? updateItemKeranjang.length
                      : jumlahItemKeranjang.length
                  }}</span>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NavHeader",
  data() {
    return {
      jumlahItemKeranjang: [],
    };
  },
  methods: {
    setJumlahItemKeranjang(data) {
      this.jumlahItemKeranjang = data;
    },
  },
  props: ["updateItemKeranjang"],
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((response) => this.setJumlahItemKeranjang(response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style>
.boks {
  position: relative;
}
.decText {
  margin-left: -11px;
  margin-top: 30%;
  color: yellow;
  font-size: 9pt;
  font-weight: bold;
  vertical-align: super;
  position: absolute;
  top: -27px;
}
</style>