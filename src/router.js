import {createRouter, createWebHistory} from "vue-router";
import Main from "./components/Main.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
    {path: "/", component: Main, name: "Main"},
    { path: '/:pathMatch(.*)*', component: NotFound, name: 'NotFound' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
