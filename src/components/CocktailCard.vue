<script setup>
import { RouterLink } from 'vue-router';


const props = defineProps( {

    cocktail: {
        type: Object,
        required: true
    }

} )
</script>

<template>
    <RouterLink :to="`/cocktail/${cocktail.idDrink}`">
        <div class="card">
            <img :src="cocktail.strDrinkThumb" alt="Cocktail" class="pic" />
            <p class="name">{{ cocktail.strDrink }}</p>
        </div>
    </RouterLink>
</template>

<styles lang="scss" scoped>
@import "../assets/styles/main.scss";

.card {

    .name {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .pic {
        width: 150px;
        height: 120px;
        border-radius: 10px;
        cursor: pointer;

    }
}
</styles>
    