<script setup>
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, watch } from "vue"
import AppLayout from "../components/AppLayout.vue"
import { useRootStore } from '../stores/root';

const route = useRoute()
const router = useRouter()
const cocktailId = computed( () => route.path.split( "/" ).pop() )
const rootStore = useRootStore()

onMounted( async () => {
    rootStore.setCocktailId( cocktailId.value );
    await rootStore.getCocktailById( cocktailId.value );
} );

function goBack() {
    router.go( -1 )
}

// Используйте watch для реагирования на изменения значения cocktail
watch( () => rootStore.cocktail, ( newCocktail ) => {
    // Здесь можно выполнить дополнительные действия после обновления cocktail
    console.log( "Cocktail обновлен:", newCocktail );
} );

console.log();

const getIngredients = computed( () => {
    const ingredients = []

    for ( let i = 1; i <= 15; i++ ) {
        if ( !rootStore.cocktail[ `strIngredient${ i }` ] ) break

        const ingredient = {}
        ingredient.name = rootStore.cocktail[ `strIngredient${ i }` ]
        ingredient.measure = rootStore.cocktail[ `strMeasure${ i }` ]

        ingredients.push( ingredient )
    }

    return ingredients
} )

</script>

<template>
    <div class="wrap" v-if="rootStore.cocktail">
        <AppLayout :imgUrl="rootStore.cocktail.strDrinkThumb" :backFunc="goBack">
            <div class="wrapper">
                <div class="info">
                    <div class="title">{{ rootStore.cocktail.strDrink }}</div>
                    <div class="line"></div>
                    <div class="list">
                        <div v-for="(item, idx) in getIngredients" class="item-list">{{ item.name }}

                            <template v-if="item.measure">
                                |
                                {{ item.measure }}
                            </template>

                        </div>
                        <div class="instructions">{{ rootStore.cocktail.strInstructions }}</div>
                    </div>
                </div>
            </div>

        </AppLayout>
    </div>
</template>

<styles lang="scss">
@import "../assets/styles/main.scss";
</styles>