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

<style scoped>
    .swiper-item{
        position: absolute;
        transition: transform 500ms ease-in-out;
    }
</style>
