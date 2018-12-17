<template>
    <ul class="submenu">
        <li :class="['submenu-item', currentIndex === index ? ' active' : '']" v-for="(item, index) in items" :key="index" @click="handleChangeSubmenu(index)">{{item}}</li>
    </ul>
</template>
<script>
export default {
    name: 'SubMenu',
    props: {
        items: {
            type: Array,
            default: ()=>{
                return ['首页', '歌手', '专辑', '排行榜', '分类歌单', '电台', 'MV']
            }
        },
        isRefresh: Boolean  //点击同一个tab是否要刷新
    },
    data(){
        return {
            currentIndex: 0
        }
    },
    methods: {
        handleChangeSubmenu: function(index){
            if( !this.isRefresh && this.currentIndex === index) return;

            let detail = {
                index,
                data: this.items[index]
            }
            this.currentIndex = index;
            this.$emit('changeSubmenu', detail);
        }
    }
}
</script>
<style lang="stylus">
    .submenu
        display inline-flex
        justify-content center
        width 100%
        padding-top 10px
        padding-bottom 10px
        list-style none
        background-color white
        cursor pointer

        & > .submenu-item
            margin-right 30px
        & > .active
            color #31c27c
</style>
