<template>
  <div>
    <Header />
    <Router-view></Router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Header from './components/Header.vue';
import { useStoreProduct } from './stores/Product'
const store = useStoreProduct()

onMounted(() => {
  store.getProduct()
})
</script>

<style lang="scss" scoped></style>