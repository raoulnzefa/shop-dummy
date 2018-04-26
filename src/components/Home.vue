<template>
    <div>
        <h1>Step Into <span class="bolder">Over Armour</span></h1>
        <div class="banner men-banner">
            <div class="men-button">
                <h2>Shop Men's</h2>
                <router-link to="/men" tag="button" class="btn btn-lg">Explore</router-link>
            </div>
        </div>
        <div class="text-center p-5">
            <h3>Choose from hundreds of styles</h3>
            <h5>Step up your game with Over Armour</h5>
        </div>
        <div class="women-banner">
            <div class="women-button">
                <h2>Shop Women's</h2>
                <router-link to="/women" tag="button" class="btn btn-lg">Explore</router-link>
            </div>
        </div>
        <app-about></app-about>
    </div>
</template>

<script>
    import About from "./About.vue";

    export default {
        components: {
            "app-about": About
        }
    }
</script>

<style scoped>
    h1 {
        text-align: center;
        margin: 40px auto;
    }

    .bolder {
        font-weight: 900;
    }

    .banner{
        margin: 10px 0;
    }

    .men-banner {
        min-height: 800px;
        min-width: 100%;
        padding: 4rem 0;
        background: url("https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=aa32268d819cd488975b3d92e88ab1bc&auto=format&fit=crop&w=1350&q=80") no-repeat center;
        background-size: cover;
    }

    .men-button {
        transform: translate(20%, 175%);
        color: white;
    }

    .men-button > button {
        margin: 10px auto;
        color: white;
        background-color: crimson;
    }

    .women-banner {
        min-height: 800px;
        min-width: 100%;
        padding: 4rem 0;
        background: url("https://wallpaperstock.net/brunette-model-in-the-desert-wallpapers_43880_2560x1600.jpg") no-repeat center;
        background-size: cover;
    }

    .women-button {
        transform: translate(25%, 250%);
    }

    .women-button > button {
        margin: 10px auto;
        color: white;
        background-color: darkblue;
    }
</style>


