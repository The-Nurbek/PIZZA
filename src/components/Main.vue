<template>
    <div class="upper__content container">
        <h1 class="main__title container">Все пиццы</h1>

        <MainList />
    </div>
</template>

<script setup>
import MainList from './MainList.vue';

import { useStoreProduct } from "../stores/Product";
const Store = useStoreProduct()



</script>

<style lang="scss" scoped></style>