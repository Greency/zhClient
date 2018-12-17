<template>
    <div class="header">
        <Menu></Menu>
    </div>
</template>
<script>
import Menu from '../components/Menu.vue'
export default {
    name: 'Header',
    components: {
        Menu
    }
}
</script>
<style lang="stylus">
    .header 
        width 100%
        border-bottom 1px solid #F0F0F0
        background-color white
</style>
