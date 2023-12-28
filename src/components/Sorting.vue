<template>
    <div class="sorting container">

        <div class="sorting__options" v-for="item in getProductSort" :key="item.id">
            <p class="p" @click="activeCloseButton(item)" :class="{ active: item.isActive == true }">
                {{ item.name }}
            </p>
        </div>

        <div class="sorting__right " @click="Store.sorted = !Store.sorted">
            <div class="down">
                <img v-if="Store.sorted == true" src="../assets/img/sortup.svg" alt="">
                <img v-else src="../assets/img/down.jpg" alt="">
                {{ Store.defultproductSort }}
            </div>
            <div class="any" v-if="Store.sorted">
                <div calss="popularity" @click="productSorting('rating')">популярности</div>
                <div calss="price" @click="productSorting('price')">по цене</div>
                <div calss="alphabet" @click="productSorting('title')">по алфавиту</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStoreProduct } from "../stores/Product.js";
import { useRouter } from "vue-router";
const Store = useStoreProduct();
const getProductSort = computed(() => Store.sortingProductsTitle)
const router = useRouter()

const productSorting = (value) => {
    if (value == 'rating') {
        Store.defultproductSort = 'По  популярности'
    } else if (value == 'price') {
        Store.defultproductSort = 'По цене'
    } else if (value == 'title') {
        Store.defultproductSort = 'по алфавиту'
    }
    Store.sorted = true
    Store.defultproductSortGetProd = value;
    Store.getProduct()
}
const activeCloseButton = (item) => {
    Store.sortingProductsTitle.forEach(el => {
        el.isActive = el === item
    });

    if (item.name === 'Все') {
        router.go(0)
    }
    Store.productOrigins = Store.product.filter(card => card.category == item.id)
}
</script>

<style lang="scss" scoped></style>