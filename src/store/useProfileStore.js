import axiosClient from "../axios/axiosClient.js";
import {defineStore} from "pinia";

const useProfileStore = defineStore("profile", {
    actions: {
        async getProfile(userId) {
            try {
                const {data} = await axiosClient.get("/users/" + userId);

                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async editProfile(userId, userData) {
            try {
                const {data} = await axiosClient.post("/users/" + userId, userData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async requestCode() {
            try {
                const {data} = await axiosClient.get("/emails/send-verify-code");

                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },

        async sendCode(code) {
            try {
                const {data} = await axiosClient.post("/emails/verify-code", {
                    code: code
                });

                return data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    }
});

export default useProfileStore;
