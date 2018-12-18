<template>
    <swiper class="swiper">
        <swiper-item><div style="width: 100%; height: 100%;background-color: red;"></div></swiper-item>
        <swiper-item><div style="width: 100%; height: 100%;background-color: green;"></div></swiper-item>
        <swiper-item><div style="width: 100%; height: 100%;background-color: black;"></div></swiper-item>
        <swiper-item><div style="width: 100%; height: 100%;background-color: white;"></div></swiper-item>
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
