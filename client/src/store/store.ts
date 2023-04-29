import { createStore } from "vuex";

const store = createStore({
    state: () => {
        return {
            counter: 0
        }
    },
    mutations: {
        set_counter (state) {
            state.counter ++
        }
    },
    actions: {

    },
    getters: {

    }
});

export default store;