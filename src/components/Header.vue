<template>
    <div class="header container">
        <div class="header__left">
            <router-link to="/">
                <img src="../assets/img/headerlogo.png" alt="">
            </router-link>
            <div class="header__left-inner">
                <h2 class="header__left-inner-title">REACT PIZZA</h2>
                <p class="header__left-inner-text">самая вкусная пицца во вселенной</p>
            </div>
        </div>
        <router-link to="/basket">
            <div class="header__right">
                <div class="header__right-price">{{ totalAmount }} ₽</div>
                <div class="header__right-korzina">
                    <img src="../assets/img/headerkorzina.svg" alt="">
                    <p class="header__right-korzina-amount">{{ productCount }}</p>
                </div>
            </div>
        </router-link>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStoreProduct } from "../stores/Product";


const Store = useStoreProduct();

const totalAmount = computed(() => {
    return Store.productBasket.reduce((total, product) => total + product.amount, 0);
});

const productCount = computed(() => Store.productCount);

</script>

<style lang="scss" scoped></style>