import { createStore } from "vuex";
export default defineNuxtPlugin(nuxtApp => {
    const store = createStore({
        state: {
            user: {
                auth: false,
                access_token: undefined,
                refresh_token: undefined,
                role: undefined,
                name: undefined,
                picture: undefined
            }
        },
        mutations: {
            set_user (state, user) {
                state.user = user
            },
            logout (state) {
                state.user = false
            }
        }
    })

    nuxtApp.vueApp.use(store)
});
