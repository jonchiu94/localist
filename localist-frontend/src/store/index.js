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
		adminStatus : false
	},
	actions   : {
		clearData ({ commit }) {
			commit('currentUser', null)
			commit('token', '')
			commit('userId', '')
			commit('adminStatus', false)
		},
		signin ({ commit, state }, data) {
			return new Promise((resolve, reject) => {
				axios
					.post(state.server_url + '/signin', data)
					.then(function (response){
						commit(
							'setCurrentUser',
							response.data.user
						)
						commit(
							'setCurrentToken',
							response.data.token
						)
						commit(
							'setUserId',
							response.data.uid
						)
						if (response.data.administration) {
							commit(
								'setAdminStatus',
								true
							)
						}
						resolve(response)
					})
					.catch(function (error){
						alert(error)
						reject(error)
					})
			})
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
		}
	},
	getters   : {
		getUserId (state) {
			return state.userId
		},
		getAdminStatus (state) {
			return state.adminStatus
		}
	}
})

export default store
