<template>
    <div class="swiper-item">
        <slot></slot>
    </div>
</template>
<script>
export default {
    data(){
        return {}
    },
    created(){
        console.log('parent: ', this.$parent);
    },
    methods: {

    }
}
</script>

<style  lang="stylus">
    .swiper-item{
        position: absolute;
        /*transition: transform 500ms ease-in-out;*/
    }
    
    .swiper-item-left
        transform translate(-100%, 0)

    .swiper-item-middle
        transform translate(0, 0)

    .swiper-item-right
        transform translate(100%, 0)
</style>
