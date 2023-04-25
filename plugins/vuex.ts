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
                state.user = {
                    auth: false,
                    access_token: undefined,
                    refresh_token: undefined,
                    role: undefined,
                    name: undefined,
                    picture: undefined
                }
            }
        },
        actions: {
            async get_some () {
               // const axios =  useNuxtApp().$axios
               //
               //  const response = await axios.get('')
               //
               //  console.log(response)
            }
        }
    })

    nuxtApp.vueApp.use(store)
});
