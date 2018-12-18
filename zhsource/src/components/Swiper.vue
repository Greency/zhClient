<template>
    <div class="swiper" v-on:touchstart='handleTouchStart' v-on:touchmove='handleTouchMove' v-on:touchend='handleTouchEnd'>
        <slot></slot>
        <div class="btn prev-btn" @click="handleChangeSwiper('prev')">上一页</div>
        <div class="btn next-btn" @click="handleChangeSwiper('next')">下一页</div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                currentSwiperIndex: 0,
                swipersNum: 0
            }
        },
        mounted(){
            //init data
            this.swipersNum = this.$children.length;
            for(let i = 0; i < this.swipersNum; i++){
                this.$children[i].$el.style = `transform: translate(${100 * i}%, 0px)`;
            }
        },
        methods: {
            handleTouchStart: function(e){
                console.log('touch start: ',e);
            },
            handleTouchMove: function(e) {
                console.log('touch move: ',e);
            },
            handleTouchEnd: function(e){
                console.log('touch end: ',e);
            },
            handleChangeSwiper: function(type){
                let index = type === 'next' ? this.currentSwiperIndex + 1 : this.currentSwiperIndex - 1;
                if(index === -1 || index > this.swipersNum) return;
                this.toggleSwiperAnimation(index);
                this.currentSwiperIndex = index;
            },
            toggleSwiperAnimation: function(index){
                for(let i = 0, len = this.$children.length; i < len; i++){
                    this.$children[i].$el.style = `transform: translate(${(i - index) * 100}%, 0px)`;
                }
            }
        }
    }
</script>
<style lang="stylus">
    .swiper
        position relative
        width 100%
        overflow hidden

    .swiper
        .prev-btn
        .next-btn
            position absolute
            top 50px
            cursor pointer
        .prev-btn
            left 0
        
        .next-btn
            right 0
        
</style>
