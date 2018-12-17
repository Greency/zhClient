<template>
   <div>
      <SubMenu />
      <router-view></router-view>
   </div>
</template>
<script>
import SubMenu from '../components/SubMenu.vue'

export default {
   name: 'Home',
   components: {
      SubMenu
   }
}  
</script>
<style scoped>

</style>

