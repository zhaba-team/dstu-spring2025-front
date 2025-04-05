import {createRouter, createWebHistory} from "vue-router";
import useRegistrationStore from "./store/useRegistrationStore.js";
import Main from "./components/Main.vue";

const routes = [
    {path: "/", component: Main, name: "Main"},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
