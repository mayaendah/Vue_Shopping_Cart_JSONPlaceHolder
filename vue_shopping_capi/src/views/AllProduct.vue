<template>
  <nav-header-vue />

  <div class="container">
    <div class="mt-4">
      <h2>Daftar Kosmetik <i class="far fa-envelope"></i></h2>

      <div class="input-group">
        <input
          v-model="cari"
          type="text"
          class="form-control"
          placeholder="Pencarian Kosmetik"
          aria-label="Username"
          aria-describedby="basic-addon1"
          @keyup="searchkosmetik"
        />
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1"
            ><i class="bi bi-search"></i
          ></span>
        </div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col-lg-4" v-for="product in products" :key="product.id">
        <card-product :product="product" />
      </div>
    </div>
  </div>
  
</template>

<script>
import NavHeaderVue from "@/components/NavHeader.vue";
import HeroPageVue from "@/components/HeroPage.vue";
import CardProduct from "@/components/CardProduct.vue";

import axios from "axios";
import { ref,onMounted } from 'vue';

export default {
  components: {
    NavHeaderVue,
    HeroPageVue,
    CardProduct,
   
  },

  setup(){
    let products=ref([])
    let cari=ref('')

    onMounted(()=>{
      axios
      .get("http://localhost:3000/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
    })

    function setProducts(data){
      products.value=data
      console.log(data);
    }

  

    function searchkosmetik(){
      axios
      .get("http://localhost:3000/products?q="+cari.value)
      
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
    }

    return{
      products,
      cari,
      searchkosmetik,
      setProducts
    }
  }

  
};
</script>
