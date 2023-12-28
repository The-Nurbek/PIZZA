<template>
    <div class="main container">
        <div class="main__cards">
            <div class="main__card">
                <img class="img" :src="`${item.imageUrl}`" alt="">
                <h2 class="main__card_title">{{ item.title }}</h2>
                <div class="main__card-options">
                    <!-- <div class="main__card-option-top">
                        <p class="main__card-option-top-text">тонкое</p>
                        <p class="main__card-option-top-text">традиционное</p>
                    </div>
                    <div class="main__card-option-bottom">
                        <p class="main__card-option-bottom-size">26 см.</p>
                        <p class="main__card-option-bottom-size">30 см.</p>
                        <p class="main__card-option-bottom-size">40 см.</p>
                    </div> -->

                </div>
                <div class="main__card-option-bottomm">
                    <p class="main__card-option-price">{{ item.price }} ₽</p>
                    <button @click="addProduct" class="main__card_btn"><img src="../assets/img/plus.png" alt="">
                        Добавить <span>{{ item.totle }}</span> </button>
                </div>
            </div>
        </div>
    </div>





    
</template>


<script setup>

import { useStoreProduct } from "../stores/Product.js";
const Store = useStoreProduct();
const props = defineProps({
    item: {
        type: Object,
    }
});
const addProduct = () => {
    if (!Store.productBasket) {
        Store.productBasket = [];
        Store.productBasket.push(props.item);
    } else {
        const index = Store.productBasket.findIndex(p => p.id === props.item.id);
        if (index == -1) {
            Store.productBasket.push(props.item);
        }
        props.item.totle += 1
        props.item.amount += props.item.price
    }
}



import { computed } from "vue";




const totalAmount = computed(() => {
    return Store.productBasket.reduce((total, product) => total + product.amount, 0);
});

const productCount = computed(() => Store.productCount);


</script>

<style lang="scss" scoped></style>