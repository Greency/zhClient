<template>
    <ul class="menu">
        <li :class="['menu-item', currentIndex === index ? ' active' : '']" v-for="(item, index) in items" :key="index" @click="handleChangeMenu(index)">{{item.text}}</li>
    </ul>
</template>
<script>
export default {
    name: 'Menu',
    props: {
        items: {
            type: Array,
            default: function(){
                return [{id: 1, text: '音乐馆'}, {id: 2, text:'我的音乐'}];
            }
        }
    },
    data(){
        return {
            currentIndex: 0
        }
    },
    methods: {
        handleChangeMenu: function(index){
            if(this.currentIndex === index) return;

            let detail = {
                index,
                data: this.items[index]
            }
            this.currentIndex = index;
            this.$emit('changeMenu', detail);
        }
    }
}
</script>
<style lang="stylus">
    .menu
        display flex
        justify-content center
        width 100%
        height 80px
        line-height 80px

        .menu-item
            margin-right 30px
            padding-left 20px
            padding-right 20px    
            font-size 16px
            cursor pointer
        .active
            background-color #31c27c
            color white
</style>
