import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        home: [],
        berita: []
    },
    actions: {
        fetchHome({ commit }) {
            api()
                .get('/api/v1/home')
                .then(data => {
                    commit('SET_HOME', data)
                })
        },
        fetchBerita({ commit }) {
            api()
                .get('/api/v1/berita')
                .then(data => {
                    commit('SET_BERITA', data)
                })
        }
    },
    mutations: {
        SET_HOME(state, data){
            state.home = data
        },
        SET_BERITA(state, data){
            state.berita = data
        }
    }
})