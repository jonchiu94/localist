import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.store({
    state: {
        currentUser: null,
        token: ''
    },
    actions: {
        clearData({ commit }) {
            commit('currentUser', null)
            commit('token', '')
        }
    },
    mutations: {
        setCurrentUser(state, val) {
            state.currentUser = val;
        },
        setCurrentToken(state, val) {
            state.token = val;
        }
    }
})
