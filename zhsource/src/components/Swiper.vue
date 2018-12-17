<template>
    <div class="swiper">
        <slot></slot>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                translates: []
            }
        },
        mounted(){
            let children = this.$children;
            console.log('children: ', this.$children[0]);
            for(let i = 0, len = children.length; i < len; i++){
                children[i].$el.style = `transform: translate(${100 * i}%, 0px)`;
            }
        },
        methods: {

        }
    }
</script>
<style scoped>
    .swiper{
        position: relative;
        width: 100%;
        overflow: hidden;
    }
</style>
