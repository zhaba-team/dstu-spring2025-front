import {createRouter, createWebHistory} from "vue-router";
import Registration from "./components/Registration.vue";
import Login from "./components/Login.vue";
import useRegistrationStore from "./store/useRegistrationStore.js";
import Main from "./components/Main.vue";
import Profile from "./components/Profile.vue";
import EmailVerified from "./components/EmailVerified.vue";

const routes = [
    {path: "/registration", component: Registration, name: "Register"},
    {path: "/login", component: Login, name: "Login"},
    {path: "/main", component: Main, name: "Main", meta: {requiresAuth: true}},
    {path: "/profile", component: Profile, name: "Profile", meta: {requiresAuth: true}},
    {path: "/email", component: EmailVerified, name: "EmailVerified", meta: {requiresAuth: true}},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const registration = useRegistrationStore();
    if (to.meta.requiresAuth && !registration.user.token) {
        next({name: "Login"});
    } else if (
        registration.user.token &&
        (to.name === "Login" || to.name === "Register")
    ) {
        next({name: "Main"});
    } else {
        next();
    }
});

export default router;
