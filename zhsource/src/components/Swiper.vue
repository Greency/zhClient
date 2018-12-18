<template>
    <div class="swiper" v-on:touchstart='handleTouchStart' v-on:touchmove='handleTouchMove' v-on:touchend='handleTouchEnd'>
        <slot></slot>
        <div class="btn prev-btn" @click="handleChangeSwiper('prev')">上一页</div>
        <div class="btn next-btn" @click="handleChangeSwiper('next')">下一页</div>
    </div>
</template>
<script>
    export default{
        props: {
            circular: Boolean,
            autoplay: Boolean,
            duration: {
                type: Number,
                default: 3000
            },
        },
        data(){
            return {
                currentSwiperIndex: 0,
                swipersNum: 0,
                timeout: null
            }
        },
        mounted(){
            //init data
            this.swipersNum = this.$children.length;
            for(let i = 0; i < this.swipersNum; i++){
                this.$children[i].$el.style = `transform: translate(${100 * i}%, 0px)`;
            }
            
            this.startAutoplay();
        },
        destroyed(){
            clearInterval(this.timeout);
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
            //自动播放轮播
            startAutoplay: function(){
                console.log('duration: ', this.duration);
                if(this.timeout === null){
                    this.timeout = setInterval(()=>{
                        let index = this.currentSwiperIndex + 1;
                        if(index > this.swipersNum) return;

                        this.toggleSwiperAnimation(index);
                        this.currentSwiperIndex = index;
                        
                        //自动滑动到了最后，从头开始
                        if(this.currentSwiperIndex === this.swipersNum) {
                            this.currentSwiperIndex = 0;
                            this.toggleSwiperAnimation(0);
                        }
                    }, this.duration);
                }
            },
            //轮播切换动画
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
