import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        home: [],
        berita: [],
        guru: [],
        alumni: [],
        tata_usaha: [],
        galleries: [],
        count_guru: 3
    },
    getters: {
    },
    actions: {
        fetchHome({ commit }) {
            api()
                .get('/api/v1/home')
                .then(data => {
                    commit('SET_HOME', data)
                    commit('SET_GURU', data.data.data.guru)
                })
        },
        fetchBerita({ commit }) {
            api()
                .get('/api/v1/berita')
                .then(data => {
                    commit('SET_BERITA', data)
                })
        },
        loadMoreDataGuru({ commit }){
            if(this.state.guru.length > this.state.count_guru)
            {
                commit('INCREASE_COUNT_GURU')
            } else {
                commit('COUNT_GURU_MAX')
            }
        }
    },
    mutations: {
        SET_HOME(state, data){
            state.home = data
        },
        SET_GURU(state, data){
            state.guru = data
        },
        SET_BERITA(state, data){
            state.berita = data
        },
        INCREASE_COUNT_GURU(state, val = 3){
            state.count_guru += val
        },
        COUNT_GURU_MAX(state){
            state.count_guru = state.guru.length
        }
    }
})