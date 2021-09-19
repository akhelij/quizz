import { createRouter, createWebHistory } from "vue-router";
import Home from '~/views/index.vue';
import routes from "virtual:generated-pages";
// import firebase from 'firebase/app';

// const routes = [
   
//     {
//         path: '/',
//         name: 'Home',
//         component: Home,
//         meta: {
//             title: "Accueil"
//         }
//     },
   
    
    // {
    //     path: '/announce/:id',
    //     props:true,
    //     name: 'UpdateAnnouncement',
    //     component: Form,
    //     meta: {
    //         title: "Publier une annonce"
    //     }
    // },
    // {
    //     path: '/announcements',
    //     name: 'ListOfAnnouncement',
    //     component: List,        
    //     props: route => ({ page: parseInt(route.query.page) || 1 }),
    //     meta: {
    //         title: "Trouver votre piscine"
    //     }
    // },
// ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach((to, from, next) => {
//     const user = firebase.auth().currentUser;
//     if(['Profile','CreateAnnouncement','UpdateAnnouncement'].includes(to.name) && user == null){
//         next('/');
//     }else{
//         document.title = `Pissina | ${to.meta.title}`;
        
//         if (typeof to.matched[0]?.components.default === 'function') {
//             store.dispatch('progressbar/start')
//         }
//         next();
//     }
// });

// router.beforeResolve((to, from, next) => {
//     store.dispatch('progressbar/stop')
//     next()
// })
export default router;