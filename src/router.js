import { createWebHistory, createRouter } from "vue-router";
import Index from './components/index-page-main.vue';
import faq from './components/faq-page.vue';
import contact from './components/contact-page.vue';
import blog from './components/blog-page.vue';
import tourDetails from './components/tour-detils.vue';
import search from './components/search-page.vue';

const routes = [
    {
        path: '/',
        name:'Home',
        component: Index
    },
    {
        path: '/faq',
        name:'Faq',
        component: faq
    },
    {
        path: '/contact',
        name:'Contact',
        component: contact
    },
    {
        path: '/blogs',
        name:'Blog',
        component: blog
    },
    {
        path: '/tour-details',
        name:'Tour-Details',
        component: tourDetails
    },
    {
        path: '/search',
        name:'Search',
        component: search
    }
];

const router = new createRouter({
    history: createWebHistory(),    
    routes,
})

export default router;