<template>
    <div class="hero">
        <!-- //desktop -->
        <div class="d-none d-md-block">
            <div class="row mt-4">
                <div class="col-md-6">
                    <div class="d-flex h-100">
                        <div class="justify-content-center align-self-center">
                            <h3><strong >Makanan dan Minuman</strong>, <br><span style="font-size:smaller">bisa di dapatkan di toko kami!</span> </h3>
                            <p>sedia selalu untuk melayani anda tanpa lelah  <i class="bi bi-emoji-smile"></i></p>
                            <button type="button" class="btn btn-primary"><i class="bi bi-arrow-bar-right"></i> Pesan</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="assets/logo.png" width="300"/>
                </div>
            </div>
        </div>
        <!-- mobile -->
        <div class="d-sm-block d-md-none">
            <div class="row  mt-4">  
                <div class="col-md-6 mb-4">
                    <center>
                        <img src="assets/logo.png" width="300"/>
                    </center>
                </div>
                
                <div class="col-md-6">
                    <div class="d-flex h-100">
                        <div class="justify-content-center align-self-center">
                            <h3>
                                <strong>Makanan dan Minuman</strong>, tentunya <span style="font-size:smaller">bisa di dapatkan di toko kami!</span> 
                            </h3>
                            <p>sedia selalu untuk melayani anda tanpa lelah  <i class="bi bi-emoji-smile"></i></p>
                            <button type="button" class="btn btn-primary"><i class="bi bi-arrow-bar-right"></i> Pesan</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>


export default {
    name:'HeroPageVue',
}
</script>