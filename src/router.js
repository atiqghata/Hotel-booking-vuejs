import { createWebHistory, createRouter } from "vue-router";
import Index from './components/index-page-main.vue';
import faq from './components/faq-page.vue';
import contact from './components/contact-page.vue';
import blog from './components/blog-page.vue';
import tourDetails from './components/tour-detils.vue';
import search from './components/search-page.vue';
import review from './components/review-page.vue';
import OurTeam from './components/our-team.vue';
import OurClients from './components/our-clients.vue';
import general from './components/general-page.vue';
import destination from './components/destination-page.vue';
import booking from './components/booking-page.vue';
import blogDetails from './components/blog-details.vue';
import activities from './components/activities-page.vue';
import about from './components/about-page.vue';

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
    },
    {
        path: '/review',
        name:'Review',
        component: review
    },
    {
        path: '/our-team',
        name:'Our-Team',
        component: OurTeam
    },
    {
        path: '/our-clients',
        name:'Our-Clients',
        component: OurClients
    },
    {
        path: '/general',
        name:'General',
        component: general
    },
    {
        path: '/destination',
        name:'Destination',
        component: destination
    },
    {
        path: '/booking',
        name:'Booking',
        component: booking
    },
    {
        path: '/blog-details',
        name:'Blog-Details',
        component: blogDetails
    },
    {
        path: '/activities',
        name:'Activities',
        component: activities
    },
    {
        path: '/about',
        name:'About',
        component: about
    }
];

const router = new createRouter({
    history: createWebHistory(),    
    routes,
})

export default router;