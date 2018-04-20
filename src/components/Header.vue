<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link class="navbar-brand" to="/">My Shop</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <router-link tag="li" to="/" class="nav-item">
                        <a class="nav-link">Home</a>
                    </router-link>
                    <router-link tag="li" to="/men" class="nav-item">
                        <a class="nav-link">Men</a>
                    </router-link>
                    <router-link tag="li" to="/women" class="nav-item">
                        <a class="nav-link">Women</a>
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

