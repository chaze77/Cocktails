<script setup>
import { ref } from 'vue';
import AppLayout from '../components/AppLayout.vue';
import { useRootStore } from '../stores/root';
import { storeToRefs } from 'pinia';
import CocktailCard from '../components/CocktailCard.vue';

const rootStore = useRootStore()
const { ingredients, ingredient, coctails } = storeToRefs( rootStore )
// const ingredient = ref( null )
rootStore.getIngredients()

function handleGetCoctails() {
    rootStore.getCoctails( rootStore.ingredient )
}

function removeIngredient() {
    rootStore.setIngredient( null )
}

</script>

<template>
    <AppLayout imgUrl="/src/assets/img/bg1.jpg" :backFunc="removeIngredient" :isBackButtonVisible="rootStore.ingredient">
        <div class="wrapper">
            <div class="info" v-if="!rootStore.ingredient || !coctails">
                <div class="title">Choose your drink</div>
                <div class="line"></div>
                <div class="select-wrapper">
                    <el-select v-model="rootStore.ingredient" placeholder="Choose main ingredient" size="large"
                        class="select" filterable @change="handleGetCoctails">
                        <el-option v-for="item in ingredients" :key="item.strIngredient1" :label="item.strIngredient1"
                            :value="item.strIngredient1" />
                    </el-select>
                </div>
                <div class="text">Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by
                    ingredient through our cocktail generator.</div>
                <div class="img"><img src="../assets/img/coctails.png" alt=""></div>
            </div>
            <div v-else class="info">
                <div class="title">COCKTAILS WITH {{ ingredient }}</div>
                <div class="line"></div>
                <div class="coctails">
                    <CocktailCard v-for="cocktail in coctails" :key="coctails.idDrink" :cocktail="cocktail" />
                </div>
            </div>

        </div>
    </AppLayout>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    .info {
        padding: 20px 0px;
        text-align: center;

        .select-wrapper {
            padding-top: 20px;
        }

        .text {
            max-width: 516px;
            padding-top: 50px;
            line-height: 36px;
            letter-spacing: 0.1em;
            color: $textMuted;
            margin: 0 auto
        }

        .img {
            padding-top: 10px;
        }

        .coctails {
            display: flex;
            gap: 30px;
            align-items: center;
            justify-content: space-around;
            flex-wrap: wrap;
            height: 340px;
            overflow-y: scroll;
            scrollbar-width: none;
        }

        .coctails::-webkit-scrollbar {
            display: none;
            /* for Chrome, Safari, and Opera */
        }
    }

}
</style>


