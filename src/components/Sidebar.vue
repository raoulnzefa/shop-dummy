<template>
    <div class="sidebar">
        <form action="">
            <div class="form-check" v-for="(filter, index) in itemFilters" :key="index">
                <input class="form-check-input" type="radio" name="filter" :id="filter" @click="$emit('filter', filter)" :checked="filter == 'All'">
                <label class="form-check-label" :for="filter">{{filter}}</label>
            </div>
        </form>
    </div>
</template>

<script>
import { itemFilters } from '../itemFilters';

export default {
    data(){
        return {
            itemFilters: itemFilters,
            activeFilter: ""
        }
    },
    methods: {

    }
}
</script>

<style scoped>
    .sidebar {
        box-shadow: 1px 3px 2px 2px #ddd;
        min-height: 100%;
        height: 100%;
        width: 200px;
        padding: 7px 15px;
        margin: 0 10px;
        float: left;
    }
</style>


