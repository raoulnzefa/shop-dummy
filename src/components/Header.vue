<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/">O.A.</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav center">
                    <router-link tag="li" to="/new" class="nav-item">
                        <a class="nav-link">New Arrivals</a>
                    </router-link>
                    <router-link tag="li" to="/men" class="nav-item">
                        <a class="nav-link">Men</a>
                    </router-link>
                    <router-link tag="li" to="/women" class="nav-item">
                        <a class="nav-link">Women</a>
                    </router-link>
                    <router-link tag="li" to="/sale" class="nav-item">
                        <a class="nav-link">Sale</a>
                    </router-link>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .center {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    .navbar-nav {
        font-size: 20px;
    }

    .navbar-nav > li {
        margin: 0 12px;
    }
</style>


