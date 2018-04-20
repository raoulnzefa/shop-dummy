import Home from "../components/Home.vue";
import Men from '../components/Men.vue';
import Women from '../components/Women.vue';
import ItemDetail from '../components/ItemDetail.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/men', component: Men},
    {path: '/men/:id', component: ItemDetail},
    {path: '/women', component: Women},
    {path: '*', redirect: '/'}
];