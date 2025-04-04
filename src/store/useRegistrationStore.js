import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useRegistrationStore = defineStore("registration", {
    state: () => ({
        user: {
            data: JSON.parse(sessionStorage.getItem("USER")) || {},
            token: sessionStorage.getItem("TOKEN") || null,
        },
    }),

    actions: {
        async register(user) {
            try {
                const {data} = await axiosClient.post("/register", user);
                this.setUser(data.user);
                this.setToken(data.token);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async login(user) {
            try {
                const {data} = await axiosClient.post("/login", user);
                this.setUser(data.user);
                this.setToken(data.token);
                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async logout() {
            await axiosClient.post("/logout");
            this.clearUser();
        },

        async getUser(userId) {
            try {
                const {data} = await axiosClient.get("/users/" + userId);
                this.setUser(data.user);
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async getRoles() {
            try {
                const {data} = await axiosClient.get("/users/roles");

                return data.roles;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        setUser(user) {
            this.user.data = user;
            sessionStorage.setItem("USER", JSON.stringify(user));
        },

        setToken(token) {
            this.user.token = token;
            sessionStorage.setItem("TOKEN", token);
        },

        clearUser() {
            this.user.data = {};
            this.user.token = null;
            sessionStorage.removeItem("USER");
            sessionStorage.removeItem("TOKEN");
        },
    },
});

export default useRegistrationStore;
