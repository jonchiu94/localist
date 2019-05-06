import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
	storage : window.localStorage
})

const store = new Vuex.Store({
	state     : {
		currentUser : localStorage.getItem('currentUser') || null,
		token       : localStorage.getItem('token') || '',
		userId      : localStorage.getItem('userId') || '',
		username    : localStorage.getItem('username') || '',
		adminStatus : localStorage.getItem('adminStatus') || false
	},
	actions   : {
		clearData ({ commit }) {
			commit('currentUser', null)
			commit('token', '')
			commit('userId', '')
			commit('adminStatus', false)
		},
		logout ({ commit }) {
			localStorage.removeItem('token')
			commit('logout')
		}
	},
	mutations : {
		setCurrentUser (state, val) {
			state.currentUser = val
		},
		setCurrentToken (state, val) {
			state.token = val
		},
		setUserId (state, val) {
			state.userId = val
		},
		setAdminStatus (state, val) {
			state.adminStatus = val
		},
		setUsername (state, val) {
			state.username = val
		},
		logout (state) {
			(state.currentUser = null),
			(state.token = ''),
			(state.userId = ''),
			(state.username = ''),
			(state.adminStatus = false)
		}
	},
	getters   : {
		getUserId (state) {
			return state.userId
		},
		getAdminStatus (state) {
			return state.adminStatus
		},
		getCurrentUser (state) {
			return state.currentUser
		},
		getUsername (state) {
			return state.username
		}
	},
	plugins   : [ vuexLocalStorage.plugin ]
})

export default store
