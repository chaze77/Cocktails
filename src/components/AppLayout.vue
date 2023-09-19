<script setup>
import {
    Back,
} from '@element-plus/icons-vue'
const props = defineProps( {
    imgUrl: {
        type: String,
        required: true
    },

    backFunc: {
        type: Function,
        required: true
    },

    isBackButtonVisible: {
        type: Boolean,
        default: true
    }

} )
</script>

<template>
    <div class="root">
        <div :style="`background-image: url(${imgUrl})`" class="img"></div>

        <div class="main">
            <div class="buttons">
                <el-button v-if="isBackButtonVisible" type="primary" :icon="Back" circle class="back" @click="backFunc" />
                <p class="btn">Cocktail Application</p>
            </div>

            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.root {
    display: flex;
    background-color: $background;
    min-height: 100vh;

    .img {
        width: 50%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50% 50%;
    }

    .main {
        display: flex;
        flex-direction: column;
        width: 50%;
        padding: 22px 20px;



        .buttons {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 10px;
            align-items: center;



            .btn {
                font-family: "Raleway";
                font-weight: 500;
                margin-left: auto;
                border: none;
                color: $accent;
                border-radius: 10px
            }
        }



    }
}
</style>
