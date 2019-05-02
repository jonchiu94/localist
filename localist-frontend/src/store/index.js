import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
	key     : 'localist',
	storage : window.localStorage
})

const store = new Vuex.Store({
	state     : {
		server_url  : 'http://localhost:1337',
		currentUser : null,
		token       : '',
		userId      : '',
		username    : '',
		adminStatus : false
	},
	actions   : {
		clearData ({ commit }) {
			commit('currentUser', null)
			commit('token', '')
			commit('userId', '')
			commit('adminStatus', false)
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
