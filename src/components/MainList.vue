<template>
    <div class="mainlist container">
        <div class="div"><input type="text" placeholder="Поиск..." v-model="Store.search" /></div>
        <div class="mainlist__grid">
            <MainListCard v-for="item in paginatedProducts" :key="item.id" :item="item" />
        </div>
        <div class="pagination">
            <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
            <span>Page {{ currentPage }} of {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">
                Next
            </button>
        </div>
    </div>
</template>

<script setup>
import MainListCard from './MainListCard.vue';
import { useStoreProduct } from "../stores/Product";
const Store = useStoreProduct()
import { computed, ref } from "vue";

const itemsPerPage = 4;
const currentPage = ref(1);

const Search = computed(() => {
    return Store.search ? Store.productOrigins.filter((product) => product.title.toLowerCase().includes(Store.search.toLowerCase())) : Store.productOrigins;
})

const totalPages = computed(() =>
    Math.ceil((Store.productOrigins?.length || 0) / itemsPerPage)
);

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    }
};

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    }
};

const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return Search.value.slice(start, end);
});

</script>

<style lang="scss" scoped>
.list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 16px;
    color: aliceblue;
    margin-bottom: 50px;
    margin-top: 50px;

    button {
        cursor: pointer;
        padding: 15px;
        background-color: #EB5A1E;
        color: white;
        border: none;
        border-radius: 4px;
        outline: none;

        &:disabled {
            background-color: #bdc3c7;
            cursor: not-allowed;
        }
    }
}
</style>