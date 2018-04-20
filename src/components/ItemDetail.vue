<template>
    <div class="container-fluid">
        <h3>Item Detail Component</h3>
        <p>You clicked:</p>
        <p>{{ item.name }}</p>

        <img :src="item.img" alt="Item Image">
    </div>
</template>

<script>
export default {
    data(){
        return {
            item: {}
        }
    },
    created(){
        this.item = this.$store.state.currItem;
    }
}
</script>

