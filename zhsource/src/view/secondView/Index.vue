<template>
    <swiper class="swiper">
        <swiper-item class="swiper-item">1111</swiper-item>
        <swiper-item class="swiper-item">2222</swiper-item>
        <swiper-item class="swiper-item">3333</swiper-item>
        <swiper-item class="swiper-item">4444</swiper-item>
    </swiper>
</template>
<script>
    import Swiper from '../../components/Swiper';
    import SwiperItem from '../../components/SwiperItem'

    export default{
        data(){
            return {
                
            }
        },
        components: {
            Swiper,
            SwiperItem
        }
    }
</script>
<style scoped>
    .swiper{
        height: 200px;
        margin-top: 20px;
        background-color: white;
    }
    .swiper-item{
        width: 100%;
        height: 200px;
    }
</style>
