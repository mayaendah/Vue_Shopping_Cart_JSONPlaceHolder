<template>
    <nav-header-vue/>
    <div class="container">
       <div class="row justify-content-center m-5">
        <div class="col text-center">
            <img src="/assets/toast.png" alt="" width="300">
            <h2><strong>Sukses</strong></h2>
            <h4>Pesanan Anda akan segera di sukses</h4>
        </div>

       </div>
    </div>
</template>
<script>
import NavHeaderVue from '@/components/NavHeader.vue';
export default {
    name:'SuksesPesan',
    components:{
        NavHeaderVue
    }
    
}
</script>