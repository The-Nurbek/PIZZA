<template>
    <div class="basket container">
        <div class="basket__upper">
            <div class="basket__upper_left">
                <img src="@/assets/img/bigkorzina.svg" alt="">
                <p class="basket__upper_left-text">Корзина</p>
            </div>
            <div class="basket__upper_right" @click="AllDelite" >
                <img src="@/assets/img/bin.svg" alt="">
                <p class="basket__upper_right-text">Очистить корзину</p>
            </div>
        </div>

        <MainListCardBasket v-for="item in Store.productBasket" :key="item.id" :item="item" />

        <div class="basket__overall">
            <p class="basket__overall_quantity">Всего виды пицц : <span> {{ productCount }} шт.</span></p>
            <p class="basket__overall_price">Сумма заказа: <span>{{ totalAmount }} ₽</span></p>
        </div>
        <div class="basket__btns">
           <router-link to="/"> <button class="basket__btns_left"><img src="@/assets/img/left.svg" alt=""> Вернуться назад</button></router-link>
            <button class="basket__btns_right" @click="AllDelite">Оплатить сейчас</button>
        </div>
    </div>
</template>

<script setup>
import MainListCardBasket from '@/components/MainListCardBasket.vue';
import { useRouter } from 'vue-router';

import { useStoreProduct } from "../stores/Product";
const Store = useStoreProduct()
const router = useRouter()
import { computed } from "vue";
const AllDelite = () => {
    Store.productBasket = []
    router.push('/')
}
const totalAmount = computed(() => {
    return Store.productBasket.reduce((total, product) => total + product.amount, 0);
});

const productCount = computed(() => Store.productCount);
</script>

<style lang="scss" scoped></style>