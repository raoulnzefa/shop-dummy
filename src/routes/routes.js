import Home from "../components/Home.vue";
import Department from '../components/Department.vue';
import ItemDetail from '../components/ItemDetail.vue';

export const routes = [
    {path: '/', component: Home},
    {path: '/men', component: Department},
    {path: '/women', component: Department},
    {path: '/men/:id', component: ItemDetail},
    {path: '*', redirect: '/'}
];