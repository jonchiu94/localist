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
		adminStatus : localStorage.getItem('adminStatus') || false,
		searchTitle : localStorage.getItem('title') || '',
		searchDate : localStorage.getItem('date') || '',
		searchGuest : localStorage.getItem('guest') || '',
	},
	actions   : {
		clearData ({ commit }) {
			commit('currentUser', null)
			commit('token', '')
			commit('userId', '')
			commit('adminStatus', false)
			commit('searchTitle', '')
			commit('searchDate', '')
			commit('searchGuest', '')
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
		setSearchTitle (state, val) {
			state.searchTitle = val
		},
		setSearchDate (state, val) {
			state.searchDate = val
		},
		setSearchGuest (state, val) {
			state.searchGuest = val
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
		},
		getSearchTitle (state) {
			return state.searchTitle
		},
		getSearchDate(state) {
			return state.searchDate
		},
		getSearchGuest (state) {
			return state.searchGuest
		}
	},
	plugins   : [ vuexLocalStorage.plugin ]
})

export default store
