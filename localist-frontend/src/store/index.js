import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

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
	}
})

export default store
