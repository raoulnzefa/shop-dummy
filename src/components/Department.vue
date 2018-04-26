<template>
  <div class="container-fluid">
        <h1 class="text-center">{{ header }}</h1>
        <app-sidebar :department="$route.path" @filter="filter = $event"></app-sidebar>
        <div class="row no-gutters">
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12" v-for="(d, index) in data" :key="d.id" v-if="filter == d.type || filter == 'All'">
                <router-link :to="'men/' + d.id" tag="div" class="item text-center my-1"  @click.native="getItem(index)">
                    <img class="thumb" :src="d.img" alt="Shoes Image">
                    <h6>{{ d.name }}</h6>
                    <p>${{ d.price }} - {{ d.type }}</p>
                </router-link>
            </div>
        </div>
  </div>
</template>

<script>
import { mItems, wItems } from '../fakerData';
import Sidebar from '../components/Sidebar.vue';

export default {
    data(){
        return {
            data: '',
            header: "",
            filter: "All"
        }
    },
    methods: {
        getItem(index){
            var item = data[index];
            this.$store.state.currItem = item;
        },
        getDepartmentData(){
            if(this.$route.path == '/men'){
                this.header = "Men's";
                this.data = mItems;
            }
            else {
                this.header = "Women's";
                this.data = wItems;
            }
            this.filter = 'All';
        }
    },
    components: {
        "app-sidebar": Sidebar
    },
    watch: {
        '$route' (to, from) {
            this.getDepartmentData();
        }
    },
        mounted(){
        this.getDepartmentData();
    }
}
</script>

<style scoped>
    .item {
        background-color: #efefef;
        cursor: pointer;
        margin: 0 5px;
        height: 300px;
    }

    .thumb {
        width: 100%;
        height: 75%;
        max-height: 75%;
    }
</style>

