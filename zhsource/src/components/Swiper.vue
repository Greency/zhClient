<template>
    <div class="swiper" v-on:touchstart='handleTouchStart' v-on:touchmove='handleTouchMove' v-on:touchend='handleTouchEnd'>
        <slot></slot>
        <div class="btn prev-btn" @click="prev()">上一页</div>
        <div class="btn next-btn" @click="next()">下一页</div>
    </div>
</template>
<script>
    export default{
        props: {
            circular: true,
            autoplay: true,
            duration: {
                type: Number,
                default: 3000
            },
        },
        data(){
            return {
                currentIndex: 0,
                itemCount: 0,
                children: [],
                timeout: null
            }
        },
        mounted(){
            //初始化关键数据
            this.itemCount = this.$children.length;
            this.$children.forEach((item)=>{
                this.children.push(item);
            });
            this.children.unshift(this.$children[this.itemCount - 1]);
            this.children.push(this.$children[0])
            console.log(this.children)
            //初始化样式
            this.reset();
        },
        destroyed(){
            clearInterval(this.timeout);
        },
        methods: {
            reset: function(){
                this.children.forEach((item, index)=>{
                    item.$el.style.opacity = 0;
                    item.$el.style.transform = `translate(${index === 0 ? -100 : (index - 1) * 100}%, 0)`;
                    item.$el.style.opacity = 1;
                });
            },
            prev: function(){
                this.translate(--this.currentIndex);
            },
            next: function(){
                this.translate(++this.currentIndex);
            },
            translate: function(index){
                console.log('i: ', index);
                console.log(this.children[0]);
                this.children.forEach((item, i)=>{
                    item.$el.transform = `translate(${(i - index) * 100}%, 0)`;
                });
            },
            animation: function(index){},
            handleTouchStart: function(){},
            handleTouchMove: function(){},
            handleTouchEnd: function(){}
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
