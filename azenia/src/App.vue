<script setup>
// eslint-disable-next-line no-unused-vars
import Header from '@/components/header.vue'
import Footer from '@/components/footer.vue';
</script>
<template>
  <header>
    <div id="app">
    <Header/>
    </div>
  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
   <Footer/> 
  </footer>
</template>

<style scoped>

</style>