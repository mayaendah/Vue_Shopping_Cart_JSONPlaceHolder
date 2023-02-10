<template>
    <div class="card mb-4 shadow">
        <img class="card-img-top" :src="'assets/cosmetik/'+product.gambar" alt="Card image cap" width="100" height="150">
        <div class="card-body" style="text-align:center">
          <h5 class="card-title">{{product.nama}}</h5>
          <p class="card-text">Harga : Rp. {{product.harga}}</p>
          <router-link  :to="{name:'DetailPesanan',params:{id:product.id}}" class="btn btn-primary btn-sm"><i class="bi bi-cart"></i> Pesan</router-link>
        </div>
      </div>
</template>

<script>
export default {
    name:'cardProduct',
    props:['product']
}
</script>