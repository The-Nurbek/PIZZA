<template>
    <div class="basket__inner">
        <div class="basket__inner-left">
            <img src="@/assets/img/mainpizza.png" alt="">
            <div class="basket__inner-left-names">
                <p class="basket__inner-left-names-nameone">{{ item.title }}</p>
                <!-- <p class="basket__inner-left-names-nametwo">тонкое тесто, {{ item.sizes[0] }}</p> -->
            </div>
        </div>
        <div class="basket__inner-right">
            <div class="basket__inner_quantity">
                <img src="@/assets/img/minus.png" alt="" @click="decrease">
                <p class="basket__inner_quantity-number">{{ item.totle }} </p>
                <img src="@/assets/img/pluss.png" alt="" @click="increase">
            </div>
            <p class="basket__inner_price">
                {{ item.amount }} ₽
            </p>
            <div class="basket__inner_cancel" @click="cancel">
                <img src="@/assets/img/cancel.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStoreProduct } from "../stores/Product";
const Store = useStoreProduct()
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});

const cancel = () => {
    const index = Store.productBasket.findIndex(p => p.id === props.item.id);
    console.log(index);
    if (index !== -1) {
        Store.productBasket.splice(index, 1);
    }
}

const increase = () => {
    props.item.totle += 1
    props.item.amount += props.item.price
}
const decrease = () => {
    if (props.item.totle >= 1) {
        props.item.totle -= 1
        props.item.amount -= props.item.price
    } else {
        return
    }

}
</script>

<style lang="scss" scoped></style>